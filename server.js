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
  console.log("Hey..i'm listening")
});

app.get('/data', function(req, res){
  var requestURL = "https://api.instagram.com/v1/tags/refugeecrisis/media/recent?client_id="


  request.get(requestURL, function(err, response, body){
  console.log("Hit route")
    var parsedJSON = JSON.parse(body);
    console.log(parsedJSON)
    res.render('show.ejs', {data: body})
  })
})
