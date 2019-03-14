'use strict'
import { app, protocol, BrowserWindow, ipcMain, Menu } from 'electron'
import App from './server/app'

import {
  createProtocol,
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

let win: any
protocol.registerStandardSchemes(['app'], { secure: true })

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { webSecurity: false },
    titleBarStyle: 'hidden'
  })
  win.setTitle('Vue-Electron App')

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    /* Loading vue app in dev mode */
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string)
    if (!process.env.IS_TEST) { win.webContents.openDevTools() }
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