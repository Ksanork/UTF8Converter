const { app } = require('electron');

import ConfigLoader from './loaders/ConfigLoader';
import PugLoader from './loaders/PugLoader';
import WindowLoader from './loaders/WindowLoader';
import ExpressLoader from './loaders/ExpressLoader';

import routesMap from './api/routesMap';

let loaders = [
    new ConfigLoader(),
    new ExpressLoader(routesMap),
    new PugLoader(),
    new WindowLoader()
];

app.whenReady().then(() => {
    loaders.forEach((loader) => loader.load());
});