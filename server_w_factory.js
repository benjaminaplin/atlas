var express = require('express');
var request = require('request');
var ejs = require('ejs');
var app = express()
var Q = require('q');
var DeferredFactory = require('./DeferredFactory');


var DeferredGet = DeferredFactory( request.get, request );

app.set("view-engine", 'ejs')
app.use( express.static( 'public') );

app.get("/", function(req,res){
  res.render('index.ejs')
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Hey..i'm listening on 3000")
});

app.get('/data', function(req, res){
  var tag = req.query.tag
  console.log("tag", tag)
  var requestURL = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=891b155cb8e64a41997c92f6b1f6a6fd";
  var arrayObjForMap = [];
  var urls = []

  DeferredGet( requestURL ).then(function( err, response, body ) {
   // console.log( err, response, body );
    var parsedJSON = JSON.parse(body);
        var pageinatedURL = parsedJSON.pagination.next_url
        var arrayInstagramObj = parsedJSON.data
        arrayInstagramObj.forEach(function(e){
          if(e.location !== null){
            var newLinkObj = {}
            var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
            arrayObjForMap.push(newObj)
          }
      })
      console.log( pageinatedURL);
  });

  // request.get(requestURL, function(err, response, body){
  //   var parsedJSON = JSON.parse(body);
  //   var pageinatedURL = parsedJSON.pagination.next_url
  //   var arrayInstagramObj = parsedJSON.data
  //   arrayInstagramObj.forEach(function(e){
  //     if(e.location !== null){
  //       var newLinkObj = {}
  //       var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //       arrayObjForMap.push(newObj)
  //     }
  //   })
  //   request.get(pageinatedURL, function(err, response, body){
  //     var parsedJSON = JSON.parse(body);
  //     var pageinatedURL = parsedJSON.pagination.next_url
  //     var arrayInstagramObj = parsedJSON.data
  //     arrayInstagramObj.forEach(function(e){
  //       if(e.location !== null){
  //         var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //         arrayObjForMap.push(newObj)
  //       }
  //     })
  //     request.get(pageinatedURL, function(err, response, body){
  //       var parsedJSON = JSON.parse(body);
  //       var pageinatedURL = parsedJSON.pagination.next_url
  //       var arrayInstagramObj = parsedJSON.data
  //       arrayInstagramObj.forEach(function(e){
  //         if(e.location !== null){
  //           var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //           arrayObjForMap.push(newObj)
  //         }
  //       })
  //       request.get(pageinatedURL, function(err, response, body){
  //         var parsedJSON = JSON.parse(body);
  //         var pageinatedURL = parsedJSON.pagination.next_url
  //         var arrayInstagramObj = parsedJSON.data
  //         arrayInstagramObj.forEach(function(e){
  //           if(e.location !== null){
  //             var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //             arrayObjForMap.push(newObj)
  //           }
  //         })
  //         request.get(pageinatedURL, function(err, response, body){
  //           var parsedJSON = JSON.parse(body);
  //           var pageinatedURL = parsedJSON.pagination.next_url
  //           var arrayInstagramObj = parsedJSON.data
  //           arrayInstagramObj.forEach(function(e){
  //             if(e.location !== null){
  //               var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //               arrayObjForMap.push(newObj)
  //             }
  //           })
  //         })
  //         request.get(pageinatedURL, function(err, response, body){
  //           var parsedJSON = JSON.parse(body);
  //           var pageinatedURL = parsedJSON.pagination.next_url
  //           var arrayInstagramObj = parsedJSON.data
  //           arrayInstagramObj.forEach(function(e){
  //             if(e.location !== null){
  //               var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //               arrayObjForMap.push(newObj)
  //             }
  //           })
  //         })
  //         request.get(pageinatedURL, function(err, response, body){
  //           var parsedJSON = JSON.parse(body);
  //           var pageinatedURL = parsedJSON.pagination.next_url
  //           var arrayInstagramObj = parsedJSON.data
  //           arrayInstagramObj.forEach(function(e){
  //             if(e.location !== null){
  //               var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
  //               arrayObjForMap.push(newObj)
  //             }
  //           })
  //         })
  //       })
  //     })
  //   })
  // })

    // setTimeout(function(){
    //   res.render('show.ejs', {arrayObjForMap: arrayObjForMap, tag: tag})
    //   console.log(arrayObjForMap.length)
    // },5000)
})



