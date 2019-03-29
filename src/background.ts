"use strict";
import { app, protocol } from "electron";
import createWindow from './server/interfaces/createWindow'

const isDevelopment = process.env.NODE_ENV !== "production";

let win: any;
protocol.registerStandardSchemes(["app"], { secure: true });



app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

app.on("ready", async () => {
  // if (isDevelopment && !process.env.IS_TEST) {
  //   // Install Vue Devtools
  //   await installVueDevtools()
  // }
  createWindow();
});
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
