let express = require('express');

export default class ExpressLoader {
    constructor(routes) {
        this.app = express();
        this.routes = routes;
    }

    initUses() {
        this.app.use("/", this.routes);
    }

    load() {
        console.log("load ExpressLoader");

        this.initUses();
        this.app.listen(3000, () => {
            console.log('Express server listening on port ');
        });
    }
}