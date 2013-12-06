// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/HomeView'
], function($, _, Backbone, HomeView){
  

  var WhatsThatRouter = Backbone.Router.extend({
      routes: {         
                    // "item/:id": "getItem",
                    "*actions": "defaultRoute"
      }

  });

  var initialize = function(){
    
    var app_router = new WhatsThatRouter;

            // app_router.on('route:getItem', function (id) {
                
            //     alert( "Get post number " + id );   
            // });

    app_router.on('route:defaultRoute', function (actions) {
                
                var myhomeView = new HomeView();
                myhomeView.render();
            
    });
     
    
    Backbone.history.start();



  };
  return {
    initialize: initialize
  };
});