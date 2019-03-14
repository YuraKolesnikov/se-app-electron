import { BrowserWindow, app } from 'electron'
import * as fse from 'fs-extra'
import * as path from 'path'

declare const __static: string

import {IApplicationSetting} from './interfaces/application'

export default class App {
  mainWindow: BrowserWindow
  app: any
  baseDir: string
  appDir: string

  constructor(setting: IApplicationSetting) {
    this.mainWindow = setting.mainWindow
    this.app = setting.app
    this.baseDir = setting.baseDir
    this.appDir = path.join(this.app.getPath('documents'), 'se-app-electron')
  }
}