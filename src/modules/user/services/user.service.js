const UserModel = require('../models/user.schema')
const StatusEnum = require('../../../common/enum/status.enum')

const UserService = {
    create (payload) {
        return new UserModel(payload).save()
    },
    getAll (query = { status: StatusEnum.ACTIVE }) {
        return UserModel.find(query)
    },
    getOneById (id) {
        return UserModel.findOne({ _id: id })
    },
    updateById (id, payload) {
        return UserModel.findOneAndUpdate({ _id: id }, { $set: { ...payload } })
    },
    deleteById (id) {
        return UserModel.findOneAndUpdate({ _id: id }, { $set: { status: StatusEnum.DELETED } })
    },
    findByEmail (email) {
        return UserModel.findOne({ email })
    }
}

module.exports = UserService