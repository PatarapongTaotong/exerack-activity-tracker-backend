const ActivityService = require('../services/activity.service')
const StatusEnum = require('../../../common/enum/status.enum')

const ActivityController = {
    createActivity: async (req, res) => {
        try {
            console.log('test')
            const payload = req.body
            const created = await ActivityService.create({ ...payload })

            res.status(201).json({
                "success": true,
                "data": created
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on create activity]: ${error.message}`
            })
        }
    },
    getAllActivitiesByUserId: async (req, res) => {
        try {
            const { uid } = req.params
            const activities = await ActivityService.getAllActivitiesByUserId(uid)
            
            res.status(200).json({
                "success": true,
                "data": activities
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on get all activities by user id]: ${error.message}`
            })
        }
    },
    getAllActivities: async (req, res) => {
        try {
            const { activityType } = req.query
            let activities = []

            if (activityType) {
                activities = await ActivityService.getAll({ activityType, status: StatusEnum.ACTIVE })
            }

            if (!activityType) {
                activities = await ActivityService.getAll()
            }
            
            res.status(200).json({
                "success": true,
                "data": activities
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on get all activities]: ${error.message}`
            })
        }
    },
    getActivityById: async (req, res) => {
        try {
            const { id } = req.params
            
            const activity = await ActivityService.getOneById(id)
            
            res.status(200).json({
                "success": true,
                "data": activity
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on get one activity]: ${error.message}`
            })
        }
    },
    updateActivity: async (req, res) => {
        try {
            const payload = req.body
            const { id } =req.params

            const updated = await ActivityService.updateById(id, payload)

            res.status(200).json({
                "success": true,
                "data": updated
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on update one activity]: ${error.message}`
            })
        }
    },
    deleteActivity: async (req, res) => {
        try {
            const { id } =req.params

            const deleted = await ActivityService.deleteById(id)

            res.status(200).json({
                "success": true,
                "data": deleted
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on delete one activity]: ${error.message}`
            })
        }
    }
}

module.exports = ActivityController