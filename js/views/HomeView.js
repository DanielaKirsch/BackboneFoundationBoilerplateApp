
define([
  'jquery',
  'underscore',
  'backbone',
  'models/CategoryItemModel',
  'collections/CategoryCollection',
  'text!templates/homeView.html'

], function($, _, Backbone, CategoryItemModel, CategoryCollection, homeView){
  
  var HomeView = Backbone.View.extend({

    el: $('#viewItemContainer'),

    render: function(){
     
      this.collection = new CategoryCollection();
      this.collection.add({ name: "Ginger Kid"});

      var data = {
        projects: this.collection.models,
        _: _ 
      };

      var compiledTemplate = _.template( homeView, data );
      
      $("#viewItemContainer").html( compiledTemplate ); 

    }
  });

  return HomeView;

});