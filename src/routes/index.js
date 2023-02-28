const siteRouter = require('./site.js');
const newsRouter = require('./news.js');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
