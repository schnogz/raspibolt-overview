const { app, Menu } = require('electron')

renderMenu = () => {
  const template = [
    {
      label: app.getName(),
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        {
          label: 'About',
          click: () => { require('electron').shell.openExternal('https://github.com/schnogz/raspibolt-overview') }
        },
        {
          label: 'Donate',
          click: () => {}
        },
        { type: 'separator' },
        { role: 'quit' }
      ]

    },
    {
      label: 'Bitcoin Node',
      submenu: [
        { label: 'Edit/View Config', click: () => {} },
        { label: 'Restart Node', click: () => {} },
        { label: 'Stop Node', click: () => {} },
      ]
    },
    {
      label: 'Lightning Node',
      submenu:  [
        { label: 'Edit/View Config', click: () => {} },
        { label: 'Restart Node', click: () => {} },
        { label: 'Stop Node', click: () => {} },
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
module.exports = {
  renderMenu
}
