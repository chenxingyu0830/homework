var express = require('express');
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  let p = path.join(__dirname, './index.html')
  res.sendFile(p)
});
app.get('/frank', function (req,res){
  res.send('hi!');
})
app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 9999, function () {
  console.log('Example app listening on port 9999!');
});