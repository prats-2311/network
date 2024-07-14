var fs=require('fs')
var w=fs.createWriteStream('cool.txt')
w.on('finish',function (){
console.log('FINISHED')
})
w.write('Hi\n')
w.write('Wow\n')
w.end()
