const { app, BrowserWindow } = require('electron');

export default class WindowLoader {
    load() {
        console.log("load WindowLoader");

        let win = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true
            }
        });

        // and load the index.html of the app.
        win.loadFile(global.config.paths.mainPage);
        win.webContents.openDevTools();
    }
}
