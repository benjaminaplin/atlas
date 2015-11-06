console.log('script.js is linked')

$('#nachos').on('click', function(e){
  location.href = "/data?tag=nachos"
})

$('#kittens').on('click', function(e){
  location.href = "/data?tag=kittens"
})

