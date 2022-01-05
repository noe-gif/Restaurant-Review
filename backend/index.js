import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import restaurantsDAO from './dao/restaurantsDAO.js'

dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
	process.env.RESTREVIEWS_DB_URI,
	{
		wtimeout: 2500,
	}
).catch(err => {
	console.log(err)
	process.exit(84)
}).then(async client => {
	await restaurantsDAO.injectDB(client)
	app.listen(port, () => {
		console.log(`listening on port ${port}`)
	})
})