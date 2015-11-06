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
  var tag = req.query.tag
  var requestURL = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=891b155cb8e64a41997c92f6b1f6a6fd&count=100"
  console.log("tag", tag)
  request.get(requestURL, function(err, response, body){
    var parsedJSON = JSON.parse(body);
    var arrayInstagramObj = parsedJSON.data
    var arrayObjForMap = [];
    arrayInstagramObj.forEach(function(e){
      if(e.location !== null){
        var newLinkObj = {}
        var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
        arrayObjForMap.push(newObj)
      }
    })
    // console.log("arrayLinks", arrayLinks)

    res.render('show.ejs', {
      arrayObjForMap: arrayObjForMap,
      tag: tag
    })
  })
})
