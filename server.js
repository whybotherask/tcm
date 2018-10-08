
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port)

// deployment tutorial
// https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489
// heroku git:remote --app <YOUR-PROJECT-NAME-HERE>
// git add . && git commit -a -m "Adding files."
// git push heroku master