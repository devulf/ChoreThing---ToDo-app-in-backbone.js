define(['backbone'], function(Backbone) {
  var App = Backbone.View.extend({
    initialize: function() {
      console.log( 'Konsol är kul!' );
    }
  });

  return App;
});
