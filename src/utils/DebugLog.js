export default class DebugLog {
    static log(message) {
        if(global.config.main.debugMode) {
            console.log(message);
        }
    }
}