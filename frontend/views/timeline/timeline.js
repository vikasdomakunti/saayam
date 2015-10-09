define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/timeline/timeline.html'
], function($, _, Backbone, TimelineTemplate){
  var TimelinePageView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
      var data = {};

      var compiledTemplate = _.template(TimelineTemplate,data);
      console.log(compiledTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  // Our module now returns our view
  return TimelinePageView;
});