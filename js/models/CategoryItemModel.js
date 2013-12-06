define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var CategoryItemModel = Backbone.Model.extend({

  	initialize: function() {

    },
    defaults: {
        image: "cat.png",
        name:"nicecat"
    }

  });

  return CategoryItemModel;

});