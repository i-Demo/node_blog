const siteRouter = require('./site.js');
const meRouter = require('./me.js');
const newsRouter = require('./news.js');
const coursesRouter = require('./courses.js');

function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;
