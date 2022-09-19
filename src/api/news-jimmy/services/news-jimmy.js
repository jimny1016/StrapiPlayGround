'use strict';

/**
 * news-jimmy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-jimmy.news-jimmy');
