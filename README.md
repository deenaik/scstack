# scstack
Sample DevOps Pipeline for app built using Node.js, Express and MongoDB

# Completed

## App development
* Create container for APP
	* Install node.js
	* install express.js to handle the UI
	`npm install express --save`
> added `--save` tag to add this package as application dependancy
	* Install nodemon
	`npm install nodemon --save-dev`
> Note: added `--save-dev` tag to metion that it is Development time dependancy.
	* Start server in nodemon mode so that it should restart automaticaly to reflect changes.
	`./node_modules/.bin/nodemon server.js`
	OR
	`npm run dev`
	* Install body-parser to handle data inputs from HTML form.
	`npm install body-parser --save`
	* Install MongoDB client
	`npm install mongodb --save`
* Create container for DB
	* Install DB from [Here] (https://www.mongodb.com/download-center?jmp=nav#community).
	* creat data folder under <project_root>/scdb/data
	* start mongodb server
	`mongod --dbpath ./data'
	* create Admin user in Mongo DB
		* connect to MongoDB from localhost
		`mongo --port 27017'
		* you will get '>' prompt, now follow these steps to create admin user.
		```
		use admin
		db.createUser(
			{
				user: "admin",
				pwd: "111111",
				roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
			}
		)
		```
		* create user for application to connect with db
		`use scdb` //creates new database if nessesary and switches to it.
		`db` shows` //currently inuse database
		`show dbs` // Shows list of all databases, but newly created db will not be avaiable in this list unless we add records to it.
		```
		db.createUser(
		{
		user: "scdbuser",
		pwd: "111111",
		roles: [
		{ role: "readWrite", db: "scdb" }
		]
		}
		)
		```
		* fire simple query to retrive results.
		`db.stages.find()`
	* Install EJS (Embedded JavaScript) template engine to get the data from DB and render it as HTML in page.
	`npm install ejs --save`
	
	
# Pending Items

## App development

* Create sample page on app
* connect app to DB
* Sample intraction between app and DB

## DevOps pipeline
* Commit code to github
`git add *`
`git commit`
`git push`
* scan code with SonarQube
* build code using ant
	* update app and DB containers with latest version
* upload app in Artifact repository
* unit test cases.
* deploy code on test environment
* test code using automation
* test code for Perf
* test code for vulnerability
* Deploy code in UAT.

