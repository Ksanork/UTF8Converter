let express = require('express');
import DebugLog from "../utils/DebugLog";

export default class ExpressLoader {
    constructor(routesMap) {
        this.app = express();
        this.routesMap = routesMap;
    }

    initUses() {
        this.initRoutes();
    }

    initRoutes() {
        this.routesMap.forEach((router, path) => {
            this.app.use(path, router);
        });
    }

    load() {
        DebugLog.log("load ExpressLoader");

        this.initUses();
        this.app.listen(3000, () => {
            DebugLog.log('Express server listening on port ');
        });
    }
}