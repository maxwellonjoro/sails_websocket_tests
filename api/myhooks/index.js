/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function myhook(sails){
//    var autobahn = require('autobahn');
//
//    var connection = new autobahn.Connection({
//        transports: [
//            {
//               'type': 'websocket',
//               'url': 'ws://127.0.0.1:1337/ws'
//            },
//            {
//               'type': 'longpoll',
//               'url': 'http://127.0.0.1:1337/lp'
//            }
//        ],
//        realm: 'realm1'
//      });
//
//        connection.onopen = function (session) {
//
//           // 1) subscribe to a topic
//           function onevent(args) {
//              console.log("Event:", args[0]);
//              console.log("Session open.");
//           }
//           
//           session.subscribe('echo', onevent);
//
//           // 2) publish an event
//           session.publish('echo', ['Hello, world!']);
//
//           // 3) register a procedure for remoting
//           function add2(args) {
//              return args[0] + args[1];
//           }
//           session.register('com.myapp.add2', add2);
//
//           // 4) call a remote procedure
//           session.call('com.myapp.add2', [2, 3]).then(
//              function (res) {
//                 console.log("Result:", res);
//              }
//           );
//        };
//
//        connection.open();
//        
//        console.log("Finished loading");
//        return;

};