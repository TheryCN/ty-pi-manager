const express = require('express')
var bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs');
const app = express()
const port = process.env.PORT || 4000;
const { exec } = require('child_process');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/status', function (req, res) {
  res.send('OK')
});

app.get('/shutdown', function(req, res) {
  child = exec("sleep 2s && shutdown -h now");
  res.send('Shutdown...');
});

app.get('/restart', function(req, res) {
  child = exec("sleep 2s && reboot");
  res.send('Reboot...');
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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'ty-pi-manager-front/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'ty-pi-manager-front/build', 'index.html'));
  });
}

app.listen(port, function () {
  console.log('Pi Manager listening on port ' + port + '!')
});
