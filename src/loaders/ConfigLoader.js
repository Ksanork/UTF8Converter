const paths = require('../config/paths.json');

export default class ConfigLoader {
    load() {
        console.log("load ConfigLoader");
        global.config = paths;
    }
}
