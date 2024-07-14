var net =require('net')
var crypto=require('crypto')
var pw='abc123'
net.createServer(function (stream){
  stream
  .pipe(crypto.createDecipher('aes192',pw))
  .pipe(net.connect(9000,'localhost'))
  .pipe(crypto.createCipher('aes192',pw))
  .pipe(stream)
}).listen(9005)
