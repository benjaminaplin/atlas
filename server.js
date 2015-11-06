var express = require('express');
var request = require('request');
var ejs = require('ejs');
var app = express()


app.set("view-engine", 'ejs')
app.use( express.static( 'public') );

app.get("/", function(req,res){
  res.render('index.ejs')
})

app.listen(3000, function(){
  console.log("Hey..i'm listening on 3000")
});

app.get('/data', function(req, res){
  console.log("req.body", req.query.tags)
  var tag = req.query.tags
  var requestURL = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=891b155cb8e64a41997c92f6b1f6a6fd"
  request.get(requestURL, function(err, response, body){
    var parsedJSON = JSON.parse(body);
    var arrayInstagramObj = parsedJSON.data
    arrayInstagramObj.forEach(function(e){
      if(e.location !== null){
        console.log("lat", e.location.latitude)
        console.log("long", e.location.longitude)
        console.log("name", e.location.name)
        console.log("lat", e.location.id)
      }
    })
    // res.render('show.ejs', {parsedJSON: parsedJSON})
  })
})
