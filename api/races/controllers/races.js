'use strict';

module.exports = {
    async find(ctx) {
        const result = await strapi.services.races.find({_sort: 'name:asc' });
        return result;
    }
};
