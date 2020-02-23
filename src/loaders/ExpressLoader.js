let express = require('express');

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
        console.log("load ExpressLoader");

        this.initUses();
        this.app.listen(3000, () => {
            console.log('Express server listening on port ');
        });
    }
}