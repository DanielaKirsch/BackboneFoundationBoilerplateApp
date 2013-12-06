require.config({
  paths: {
   jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates'
  },
  shim: {
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }


});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
        
  // The "app" dependency is passed in as "App"
  App.initialize();

});