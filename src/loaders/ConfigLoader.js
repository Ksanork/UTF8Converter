const web = require('../config/web.json');
const upload = require('../config/upload.json');
const main = require('../config/main.json');
const messages = require('../config/messages.json');
import DebugLog from "../utils/DebugLog";

const jsonMerger = require("json-merger");

export default class ConfigLoader {
    load() {
        let config = Object.assign(
            main, web, upload
        );
        global.config = config;
        global.messages = messages;

        DebugLog.log("ConfigLoader loaded");
    }
}
