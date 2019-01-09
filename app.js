const express = require('express')
var bodyParser = require('body-parser');
var fs = require('fs');
const app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/shutdown', function(req, res) {
  res.writeHead(200);
  child = exec("shutdown -h now", function (error, stdout, stderr) {
    res.end("Shutdown !");
  });
  res.write('Shutdown...');
});

app.get('/restart', function(req, res) {
  res.writeHead(200);
  child = exec("reboot", function (error, stdout, stderr) {
    res.end("Reboot !");
  });
  res.write('Reboot...');
});

/**
curl -X POST \
  http://localhost:3000/settings/luminosity \
  -H 'Content-Type: application/json' \
  -d '{
	"luminosity": 9
}'
*/
app.post('/settings/:app', function (req, res) {
  let dir = './app/';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
  }
  fs.writeFileSync(dir + req.params.app + '.json', JSON.stringify(req.body), 'utf8');
  res.send("Settings created !");
})

app.listen(3000, function () {
  console.log('Pi Manager listening on port 3000!')
});
