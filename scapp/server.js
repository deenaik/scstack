console.log('SwiftConnect Starting')

//For User Interface
const express = require('express'); 
//app.set('view engine','ejs')

//For retriving data
const bodyParser = require('body-parser') 
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

//For Using Database client
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://scdbuser:111111@localhost:27017/scdb', (err, database) => {
	if (err) return console.log(err)
		db = database
	app.listen(3000, function() {
	console.log('listening on 3000')
	})
})

// app.get('/', function (req, res) {
	// res.send('Welcome to SwiftConnect')
// })
// Note: request and response are usually written as req and res respectively.

//Same example as above in ES6 code.
app.get('/', (req,res) => {
	db.collection('stages').find().toArray((err, result) => {
		if (err) return console.log(err)
			//renders index.ejs
		res.render('index.ejs', {stages: result})
	})
	//res.sendFile(__dirname + '/index.html')
	// Note: __dirname is the path to your current working directory.
//	res.send('Welcome to SwiftConnect')
})

// posting data inserted into database
app.post('/stages', (req,res) => {
	db.collection('stages').save (req.body, (err,result) => {
		if (err) return console.log(err)
		console.log('Saved to database')
		res.redirect('/') //Otherwise browser will be stuck forever
	})
	
})

console.log('SwiftConnect Started')
