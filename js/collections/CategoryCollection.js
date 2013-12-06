
define([
  'underscore',
  'backbone',
  'models/CategoryItemModel'
  
], function(_, Backbone, CategoryItemModel){
  var CategoryCollection = Backbone.Collection.extend({

    	model : CategoryItemModel,
      name: "Katzen",
      cssclass: "cats"

  });
  
  return CategoryCollection;
});