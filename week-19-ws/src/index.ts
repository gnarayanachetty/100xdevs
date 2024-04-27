import  { WebSocketServer, WebSocket } from 'ws';
import express from 'express'

const app = express()
app.get('/',(req,res)=>{
  console.log('hello world from server');
})
const httpServer = app.listen(8080,function() {
  console.log((new Date()) + ' Server is listening on port 8080');
});
const wss = new WebSocketServer({server:httpServer})


wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
    console.log('message received from server: %s',data);
  });

  ws.send('Hello! Message From Server!!');
});

