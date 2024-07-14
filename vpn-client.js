var net =require('net')
var crypto=require('crypto')
var pw='abc123'
var stream=net.connect(9005,'localhost')
  stream
  .pipe(crypto.createCipher('aes192',pw))
  .pipe(stream)
  .pipe(crypto.createDecipher('aes192',pw))
  .pipe(process.stdout)

