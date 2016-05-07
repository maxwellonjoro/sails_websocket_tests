/**
 * EchoController
 *
 * @description :: Server-side logic for managing echoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    echoio: function(req,res){
        if(req.isSocket===true){
            Echo.watch(req.socket);
            console.log("Client connected");
            res.ok();
        }else{
            console.log("Gerrarahia");
            res.ok();            
        }
    },
    doNothing: function(req,res){
        WebSocket.createWSNode();
        res.ok();
    }
};
