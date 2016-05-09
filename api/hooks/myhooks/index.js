/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (sails){
    return {
        initialize: function (next) {
            WebSocket.createWSNode();
            return next();
        }

  };

}