const { app, BrowserWindow } = require('electron');

export default class WindowLoader {
    load() {
        console.log("load WindowLoader");

        let win = this.getNewWindow(500, 300);
        win.loadFile(global.config.paths.mainPage);
        win.webContents.openDevTools();
    }

    getNewWindow(width, height) {
        let win = new BrowserWindow({
            width: width,
            height: height,
            webPreferences: {
                nodeIntegration: true
            }
        });

        return win;
    }
}
