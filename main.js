const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

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
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    // maxWidth: 800,
    // maxHeight: 400,
    show: false,
    // frame: false
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
    if (isDev) mainWindow.webContents.openDevTools()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

ipcMain.on('refresh-data', (e) => {
  e.sender.send('data-refreshed', { test: 'YO' })
})

app.on('ready', renderApp)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) renderApp()
})
