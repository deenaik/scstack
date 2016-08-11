console.log('SwiftConnect Starting')

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function() {
	console.log('listening on 3000')
})

// app.get('/', function (req, res) {
	// res.send('Welcome to SwiftConnect')
// })
// Note: request and response are usually written as req and res respectively.

//Same example as above in ES6 code.
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/index.html')
	// Note: __dirname is the path to your current working directory.
//	res.send('Welcome to SwiftConnect')
})

app.post('/stages', (req,res) => {
	console.log(req.body)
})

console.log('SwiftConnect Started')
