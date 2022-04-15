const Joi = require('joi')
const StatusEnum = require('../../../common/enum/status.enum')

const PaginateActivitiesDto = Joi.object({
    sort: Joi.string().default('date'),
    sortOrder: Joi.string().default('desc'),
    limit: Joi.number().default(20),
    page: Joi.number().default(1),
    types: Joi.array().items(Joi.string()).default([]),
    status: Joi.string().default(StatusEnum.ACTIVE)
})

const buildQuery = (query) => {
    const result = { ...query }
    const options = {
        sort: {
            [query.sort]: query.sortOrder
        },
        limit: query.limit,
        page: query.page
    }

    if (result?.types.length) {
        result.activityType = {
            $in: result.types
        }
    }

    delete result.types,
    delete result.sort,
    delete result.sortOrder,
    delete result.page,
    delete result.limit

    return { result, options }
}

module.exports = {
    PaginateActivitiesDto,
    buildQuery
}