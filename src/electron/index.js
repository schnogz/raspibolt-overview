const electron = require('electron')
const { app, BrowserWindow, ipcMain } = electron
const path = require('path')
const url = require('url')

const Menu = require('./menu')
const Utils = require('./utils')

let mainWindow;
let isDev = false;
if (process.defaultApp ||
  /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
  /[\\/]electron[\\/]/.test(process.execPath)
) {
  isDev = true
}

function renderApp() {
  let indexPath
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    frame: true,
    maxHeight: height,
    maxWidth: width,
    height: height,
    width: width,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isDev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    })
  }
  mainWindow.loadURL(indexPath)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    // if (isDev) mainWindow.webContents.openDevTools()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

ipcMain.on('data-request', (event, cmdRequest) => {
  Utils.executeBashScript(cmdRequest).then((resp) => {
    const { cmd: commandRan, stdout: data, stderr: error } = resp
    event.sender.send('data-response', { cmdRequest, commandRan, data, error })
  })
})

app.on('ready', () => {
  renderApp()
  Menu.renderMenu()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) renderApp()
})
