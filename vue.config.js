const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        javascriptEnabled: true,
      },
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Vue Electron POC',
        win: {
          icon: './public/app-icons/logo.ico'
        },
        mac: {
          icon: './public/app-icons/logo-fang2.icns',
        },
        asar: false,
        nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
          shortcutName: 'POC',
        },
      },
    },
  },
}
