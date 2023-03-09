const Course = require('../models/Course');

class CourseController {
    // [GET] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => res.render('courses/show', { course }))
            .catch((err) => next(err));
    }

    // [GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [GET] courses/:_id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((course) => res.render('courses/edit', { course }))
            .catch((err) => next(err));
    }

    // [POST] courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.create(formData)
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }

    // [PUT] courses/:id
    update(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {});
        // res.json(req.body)
    }
}

module.exports = new CourseController();
