import { app, protocol, BrowserWindow, ipcMain, Menu } from "electron";
import App from "../app";
import {
  createProtocol,
} from "vue-cli-plugin-electron-builder/lib";

let win: any
let template: any
template = [
  {
    label: 'Fiori',
    submenu: [
      {
        label: 'Home',
        click() {
          win.webContents.send('navigate', 'home')
        }
      },
      { type: 'separator' },
      {
        label: 'Connect GUI',
        click() {
          win.webContents.send('navigate', 'gui')
        }
      },
      {
        label: 'Connect WDA',
        click() {
          win.webContents.send('navigate', 'wda')
        }
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
Menu.setApplicationMenu(menu)



function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: { webSecurity: false },
    titleBarStyle: "hidden"
  });
  win.setTitle("Vue-Electron App");

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    /* Loading vue app in dev mode */
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) { win.webContents.openDevTools(); }
  } else {
    createProtocol("app");
    /* Loading the index.html when not in dev */
    win.loadURL("app://./index.html");
  }

  win.on('ready-to-show', () => {
    win.show()
  })
  /* Gift for garbage collector */
  win.on("closed", () => {
    win = null;
  });

  const setting = {
    mainWindow: win,
    app,
    baseDir: __dirname,
  };
  const appInstance = new App(setting);
}

export default createWindow