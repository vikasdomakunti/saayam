define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/kids/kids.html'
], function($, _, Backbone, KidTemplate){
  var KidPageView = Backbone.View.extend({
    el: $('#kids'),
    render: function(){
      var data = {};

      var compiledTemplate = _.template(KidTemplate,data);
      console.log(compiledTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  // Our module now returns our view
  return KidPageView;
});