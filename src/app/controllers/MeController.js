const Course = require('../models/Course');

class MeController {
    // [GET] me/stored/courses
    storedCourses(req, res) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('me/stored-courses', { courses });
            })
            .catch((err) => next(err));
    }
}

module.exports = new MeController();
