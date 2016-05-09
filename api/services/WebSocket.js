/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var countNoOfPhoneRequests = 0;

module.exports = {
       testJSON: function () {
            var orig_json = {};
            orig_json.max = "Max";
            orig_json.age = "19";
            orig_json.online = true;
            console.log(orig_json);
        },
        createWSNode:function(){
            var WebSocketServer = require('websocket').server;
            var http = require('http');

            var server = http.createServer(function(request, response) {
                // process HTTP request. Since we're writing just WebSockets server
                // we don't have to implement anything.
            });
            server.listen(9999, function() { });

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
                        var json_obj = JSON.parse(message.utf8Data);
                        console.log(json_obj);
                        countNoOfPhoneRequests++;
                        json_obj.msgNo = countNoOfPhoneRequests;
                        console.log(json_obj);
                        connection.send(JSON.stringify(json_obj));
                    }
                });

                connection.on('close', function(connection) {
                    // close user connection
                    console.log("Connection closed");
                });
            });
        }

}