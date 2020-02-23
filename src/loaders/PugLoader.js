const setupPug = require('electron-pug');

export default class PugLoader {
    load() {
        console.log("load PugLoader");

        try {
            let pug =  setupPug({pretty: true});
            pug.on('error', err => console.error('electron-pug error', err))
        } catch (err) {
            // Could not initiate 'electron-pug'
        }
    }
}