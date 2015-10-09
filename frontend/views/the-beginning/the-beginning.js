define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/the-beginning/the-beginning.html'
], function($, _, Backbone, TheBeginningTemplate){
  var TheBeginningPageView = Backbone.View.extend({
    el: $('#the-beginning'),
    render: function(){
      var data = {};

      var compiledTemplate = _.template(TheBeginningTemplate,data);
      console.log(compiledTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  // Our module now returns our view
  return TheBeginningPageView;
});