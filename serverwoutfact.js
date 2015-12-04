// var express = require('express');
// var request = require('request');
// var ejs = require('ejs');
// var app = express()
// var Q = require('q');

// function removeSpaces(str){
//  var newStr = str.split("");
//  var itemToRemove;
//  newStr.forEach(function(e){
//   if(e === ' '){
//    itemToRemove = newStr.indexOf(e);
//    newStr.splice(itemToRemove, 1);
//    }  
//  })
//  newStr = newStr.join('')
//  console.log('newStr', newStr);
//  return newStr;
// }

// app.set("view-engine", 'ejs')
// app.use( express.static( 'public') );

// app.get("/", function(req,res){
//   res.render('index.ejs')
// })

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Hey..i'm listening on 3000")
// });

// app.get('/data', function(req, res){
//   var apiKey = '891b155cb8e64a41997c92f6b1f6a6fd';
//   var tag = req.query.tag;
//   console.log(tag)
//   tag = removeSpaces(tag)
//   console.log(tag)
//   var requestURL = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?client_id=" + apiKey;
//   var urls = [];
//   var arrayObjForMap = [];
//   var pageinatedURL;

//   request.get(requestURL, function(err, response, body){
//     var parsedJSON = JSON.parse(body);
//     pageinatedURL = parsedJSON.pagination.next_url
//     var arrayInstagramObj = parsedJSON.data
//     arrayInstagramObj.forEach(function(e){
//       if(e.location !== null){
//         var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//         arrayObjForMap.push(newObj)
//       }
//     })
//     request.get(pageinatedURL, function(err, response, body){
//       var parsedJSON = JSON.parse(body);
//       pageinatedURL = parsedJSON.pagination.next_url
//       var arrayInstagramObj = parsedJSON.data
//       arrayInstagramObj.forEach(function(e){
//         if(e.location !== null){
//           var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//           arrayObjForMap.push(newObj)
//         }
//       })
//       request.get(pageinatedURL, function(err, response, body){
//         var parsedJSON = JSON.parse(body);
//         pageinatedURL = parsedJSON.pagination.next_url
//         var arrayInstagramObj = parsedJSON.data
//         arrayInstagramObj.forEach(function(e){
//           if(e.location !== null){
//             var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//             arrayObjForMap.push(newObj)
//           }
//         })
//         request.get(pageinatedURL, function(err, response, body){
//           var parsedJSON = JSON.parse(body);
//           pageinatedURL = parsedJSON.pagination.next_url
//           var arrayInstagramObj = parsedJSON.data
//           arrayInstagramObj.forEach(function(e){
//             if(e.location !== null){
//               var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//               arrayObjForMap.push(newObj)
//             }
//           })
//           request.get(pageinatedURL, function(err, response, body){
//             var parsedJSON = JSON.parse(body);
//             pageinatedURL = parsedJSON.pagination.next_url
//             var arrayInstagramObj = parsedJSON.data
//             arrayInstagramObj.forEach(function(e){
//               if(e.location !== null){
//                 var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//                 arrayObjForMap.push(newObj)
//               }
//             })
//           })
//           request.get(pageinatedURL, function(err, response, body){
//             var parsedJSON = JSON.parse(body);
//             pageinatedURL = parsedJSON.pagination.next_url
//             var arrayInstagramObj = parsedJSON.data
//             arrayInstagramObj.forEach(function(e){
//               if(e.location !== null){
//                 var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//                 arrayObjForMap.push(newObj)
//               }
//             })
//           })
//           request.get(pageinatedURL, function(err, response, body){
//             var parsedJSON = JSON.parse(body);
//             var pageinatedURL = parsedJSON.pagination.next_url
//             var arrayInstagramObj = parsedJSON.data
//             arrayInstagramObj.forEach(function(e){
//               if(e.location !== null){
//                 var newObj = {tag: tag, lat: e.location.latitude, lng: e.location.longitude, name: e.location.name, locId: e.location.id, link: e.images.thumbnail.url}
//                 arrayObjForMap.push(newObj)
//               }
//             })
//             res.render('show.ejs', {arrayObjForMap: arrayObjForMap, tag: tag})
//             console.log("Found this many pics w geoloc:", arrayObjForMap.length)
//           })
//         })
//       })
//     })
//   })
// })




