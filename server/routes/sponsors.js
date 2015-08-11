/**
 * Sitespeed.io - How speedy is your site? (https://www.sitespeed.io)
 * Copyright (c) 2015, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('sponsors/index', {
		layout: 'main',
		bodyId: 'flash',
		title: 'Sponsor sitespeed.io and make it even better!',
		description: 'Do you want to help us keeping run.sitespeed.io up and running? The Swedish Internet Infrastructure Foundation sponsored the money for building the first online version of sitespeed.io, you can help us too!'
	});
});

module.exports = router;
