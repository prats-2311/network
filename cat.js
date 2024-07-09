var concat = require('concat-stream')
var http= require('http')
var through=require('through2')
var qs = require('querystring')
var server = http.createServer(function (req,res){
req
.pipe(counter())
.pipe(concat({encoding:'string'},onBody))
function counter(){
var size=0
return through(function(buf,enc,next){
size+=buf.length
if(size>20){
next(null,null)
}else next(null,buf)
})}

function onBody(body){
var params=qs.parse(body)
console.log(params)
res.end('ok\n')
}
})
server.listen(6000)
