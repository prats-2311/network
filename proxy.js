var net =require('net')
net.createServer(function (stream){
  stream.pipe(net.connect(9000,'localhost')).pipe(stream)
}).listen(9005)
