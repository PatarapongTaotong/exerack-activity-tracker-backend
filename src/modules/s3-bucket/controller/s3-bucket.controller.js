const dotenv = require('dotenv')
const aws = require('aws-sdk')

dotenv.config()

const region = 'ap-southeast-1'
const bucketName = 'exerack-image-bucket'
const accessKeyId = process.env.S3_BUCKET_ACCESS_KEY_ID
const secretAccessKey = process.env.S3_BUCKET_SECRET_ACCESS_KEY

const S3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

const S3BucketController = {
    generateUploadUrl: async (req, res) => {
        try {
            const { fileType } = req.params
            const imageName = `my-image-${+new Date()}.${fileType}`

            const params = {
                Bucket: bucketName,
                Key: imageName,
                Expires: 60
            }

            const uploadUrl = await S3.getSignedUrlPromise('putObject', params)

            res.status(200).json({
                'success': true,
                'data': uploadUrl
            })

        } catch (error) {
            res.status(500).json({
                'success': false,
                'data': `[Error on create upload url to s3]: ${error.message}`
            })
        }
        
    }
}

module.exports = S3BucketController