import { BrowserWindow } from 'electron'

export interface IApplicationSetting {
  mainWindow: BrowserWindow
  app: any
  baseDir: string
}

export interface IApplication {
  mainWindow: BrowserWindow
  app: any
  baseDir: string
  appDir: string
}