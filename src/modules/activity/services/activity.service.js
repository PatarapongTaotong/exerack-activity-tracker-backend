const ActivityModel = require('../models/activity.schema')
const StatusEnum = require('../../../common/enum/status.enum')

const ActivityService = {
    create (payload) {
        return new ActivityModel(payload).save()
    },
    getAll (query = { status: StatusEnum.ACTIVE }) {
        return ActivityModel.find(query)
    },
    getAllByUserId (id, query = { status: StatusEnum.ACTIVE }) {
        return ActivityModel.find({ _id: id, ...query})
    },
    getOneById (id) {
        return ActivityModel.findOne({ _id: id })
    },
    updateById (id, payload) {
        return ActivityModel.findOneAndUpdate({ _id: id }, { $set: { ...payload } })
    },
    deleteById (id) {
        return ActivityModel.findOneAndUpdate({ _id: id }, { $set: { status: StatusEnum.DELETED } })
    },
    getAllActivitiesByUserId (userId, limit = 0) {
        return ActivityModel.find({ userId, status: StatusEnum.ACTIVE }).sort({ date: -1 }).limit(limit)
    },
    paginate (query, paginate) {
        return ActivityModel.paginate(query, paginate)
    }
}

module.exports = ActivityService