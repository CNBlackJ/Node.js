const { Db, MongoClient, ObjectID } = require('mongodb')
const Bluebird = require('bluebird')

const host = 'localhost:27017'
const user = ''
const pass = ''
const devAffiliate = `mongodb://${host}/dev-affiliates`
const devVenues = `mongodb://${host}/dev-airplake`

async function getVenueComentCount() {
	const db = await MongoClient.connect(devAffiliate)
	const Comment = db.collection('Comment')
	const result = await Comment.aggregate([
		{$match: { type: 'VENUES' }},
		{$group: { _id: "$targetId", count: { $sum: 1 } }}
		]).toArray()
	db.close()
  return result
}

async function updateCommentCount(sourceDatas) {
	const db = await MongoClient.connect(devVenues)
	const Venues = db.collection('Venues')
	const result = await Bluebird.map(sourceDatas, (sourceData) => {
		return Venues.update({ _id: ObjectID(sourceData['_id']) }, { $set: { 'comment.count': sourceData['count'] } })
	})
	db.close()
	return result
}

async function update() {
	const sourceDatas = await getVenueComentCount()
	await updateCommentCount(sourceDatas)
}

update().then((result) => console.log(result)).catch((err) => console.log(err))
