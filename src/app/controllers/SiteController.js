const Course = require('../models/Course');

class SiteController {
    // [GET] Home
    index(req, res) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('home', { courses });
            })
            .catch((err) => next(err));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
