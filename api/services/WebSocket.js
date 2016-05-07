/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var countNoOfPhoneRequests = 0;

module.exports = {
    
    createWS:function(){
        var autobahn = require('autobahn');
        
        var connection = new autobahn.Connection({
            transports: [
                {
                   'type': 'websocket',
                   'url': 'ws://localhost:9999'
                },
                {
                   'type': 'longpoll',
                   'url': 'http://localhost:1337/lp'
                }
            ],
            realm: 'realm1'
          });

            connection.onopen = function (session) {
                
                console.log("Connection opened");

               // 1) subscribe to a topic
               function onevent(args) {
                  console.log("Event:", args[0]);
                  console.log("Session open.");
               }

               session.subscribe('echo', onevent);

               // 2) publish an event
               session.publish('echo', ['Hello, world!']);

               // 3) register a procedure for remoting
               function add2(args) {
                  return args[0] + args[1];
               }
               session.register('com.myapp.add2', add2);

               // 4) call a remote procedure
               session.call('com.myapp.add2', [2, 3]).then(
                  function (res) {
                     console.log("Result:", res);
                  }
               );
            };
            connection.onclose = function(session){
                console.log("Connection closed");
            };

            connection.open();

            console.log(connection.isOpen);
            console.log(connection.isConnected);
            console.log("Finished loading");
            return;

        },
        createWSEngineIO: function () {
            var engine = require('engine.io');
            var server = engine.listen(9999);

              server.on('connection', function(socket){
              socket.send('utf 8 string');
              socket.send(new Buffer([0, 1, 2, 3, 4, 5])); // binary data
            });
        },
        createWSNode:function(){
            var WebSocketServer = require('websocket').server;
            var http = require('http');

            var server = http.createServer(function(request, response) {
                // process HTTP request. Since we're writing just WebSockets server
                // we don't have to implement anything.
            });
            server.listen(8080, function() { });

            // create the server
            wsServer = new WebSocketServer({
                httpServer: server
            });

            // WebSocket server
            wsServer.on('request', function(request) {
                countNoOfPhoneRequests = 0;
                var connection = request.accept(null, request.origin);

                // This is the most important callback for us, we'll handle
                // all messages from users here.
                connection.on('message', function(message) {
                    if (message.type === 'utf8') {
                        // process WebSocket message
                        countNoOfPhoneRequests++;
                        console.log(countNoOfPhoneRequests+"Message: "+message.utf8Data);
                        connection.send(countNoOfPhoneRequests+" messages");
                    }
                });

                connection.on('close', function(connection) {
                    // close user connection
                    console.log("Connection closed");
                });
            });
        }

}