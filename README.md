# scstack
Sample DevOps Pipeline

# Pending Items

## App development
* Create container for APP
	* Install node.js
	* install express.js to handle the UI
	'npm install express --save'
	> added '--save' tag to add this package as application dependancy
	* Install nodemon
	'npm install nodemon --save-dev'
	> Note: added '--save-dev' tag to metion that it is Development time dependancy.
	* Start server in nodemon mode so that it should restart automaticaly to reflect changes.
	> ./node_modules/.bin/nodemon server.js
	OR
	> npm run dev
	* Install nbody-parser to handle data inputs from HTML form.
	> npm install body-parser --save
* Create container for DB
* Create sample page on app
* connect app to DB
* Sample intraction between app and DB

## DevOps pipeline
* Commit code to github
'git add *'
'git commit'
'git push'
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

