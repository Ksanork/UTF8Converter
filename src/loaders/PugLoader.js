const setupPug = require('electron-pug');
import DebugLog from "../utils/DebugLog";

export default class PugLoader {
    load() {
        DebugLog.log("load PugLoader");

        try {
            let pug =  setupPug({pretty: true});
            pug.on('error', err => console.error('electron-pug error', err))
        } catch (err) {
            // Could not initiate 'electron-pug'
        }
    }
}