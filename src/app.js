const { app } = require('electron');

import routes from './api/routes';

import ConfigLoader from './loaders/ConfigLoader';
import PugLoader from './loaders/PugLoader';
import WindowLoader from './loaders/WindowLoader';
import ExpressLoader from './loaders/ExpressLoader';

let loaders = [
    new ConfigLoader(),
    new ExpressLoader(routes),
    new PugLoader(),
    new WindowLoader()
];

app.whenReady().then(() => {
    loaders.forEach((loader) => loader.load());
});