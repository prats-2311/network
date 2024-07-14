var fs=require('fs')
var through=require('through2')
fs.createReadStream(process.argv[2])
.pipe(through(toUpper))
.pipe(process.stdout)


function toUpper(buf,enc,next){
//next(null,buf.toString().toUpperCase())
this.push(buf.toString().toUpperCase())
this.push(null)
//next()
}


