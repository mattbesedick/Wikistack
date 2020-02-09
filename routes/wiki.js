const router = require('express').Router();
const addPage = require('../views/addPage');
const layout = require('../views/layout');
const { Page } = require('../models');

function slugTransform(title) {
	const regex = /\s+/g;
	const slug = title.replace(regex, '_').replace(/\W/g, '');
	return slug;
}

router.get('/', (req, res, next) => {
	res.send(layout());
});

router.post('/', async (req, res, next) => {
	const slug = slugTransform(req.body.title);

	const page = new Page({
		slug: slug,
		title: req.body.title,
		content: req.body.content,
		status: req.body.status
	});
	Page.beforeValidate(slugTransform(slug));

	try {
		await page.save();
		res.redirect('/');
	} catch (err) {
		next(err);
	}
});
router.get('/add', (req, res, next) => {
	res.send(addPage());
});

module.exports = router;
