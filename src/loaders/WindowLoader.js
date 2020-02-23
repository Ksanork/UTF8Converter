import DebugLog from "../utils/DebugLog";
const { app, BrowserWindow } = require('electron');

export default class WindowLoader {
    load() {
        DebugLog.log("load WindowLoader");

        let {width, height} = this.initWindowSize();

        let win = this.getNewWindow(width, height);
        win.loadFile(global.config.web.paths.mainPage);

        if(global.config.main.debugMode) {
            win.webContents.openDevTools();
        }
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

    initWindowSize() {
        let width = !global.config.main.debugMode ?
            global.config.main.windowWidth : global.config.main.debugWindowWidth;

        let height = !global.config.main.debugMode ?
            global.config.main.windowHeight : global.config.main.debugWindowHeight;

        return {width, height};
    }
}
