'use strict'
import { app, protocol, BrowserWindow, BrowserView, ipcMain, Menu } from 'electron'
import App from './server/app'
import menu from './electron/Menu'
import {
  createProtocol,
} from 'vue-cli-plugin-electron-builder/lib'

let win: any
let view: any


const isDevelopment = process.env.NODE_ENV !== 'production'
const template = [
  {
    label: 'Fiori',
    submenu: [
      {
        label: 'Home'
      },
      { type: 'separator' },
      {
        label: 'Connect GUI',
        click() {
          win.webContents.send('showGUI', 'gui')
        }
      },
      {
        label: 'Connect WDA'
      },
      { type: 'separator' },
      {
        label: 'Connect FE'
      },
      {
        label: 'Connect Ref App'
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click() { require('electron').shell.openExternal('https://electronjs.org') }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  })
}

const menu = Menu.buildFromTemplate(template)

protocol.registerStandardSchemes(['app'], { secure: true })

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { webSecurity: false },
    titleBarStyle: 'hidden'
  })
  win.setTitle('Vue-Electron App')
  view = new BrowserView({
    webPreferences: {
      nodeIntegration: false
    }
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    /* Loading vue app in dev mode */
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
  } else {
    createProtocol('app')
    /* Loading the index.html when not in dev */
    win.loadURL('app://./index.html')
  }

  /* Gift for garbage collector */
  win.on('closed', () => {
    win = null
  })

  const setting = {
    mainWindow: win,
    app,
    baseDir: __dirname,
  }
  const appInstance = new App(setting)

  Menu.setApplicationMenu(menu)
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', async () => {
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   await installVueDevtools()
  // }
  createWindow()
})
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}