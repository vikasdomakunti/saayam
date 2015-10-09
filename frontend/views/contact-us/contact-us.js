define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contact-us/contact-us.html'
], function($, _, Backbone, ContactUsTemplate) {
  var ContactUsPageView = Backbone.View.extend({
    el: $('#container'),
    render: function() {
      var data = {};

      var compiledTemplate = _.template(ContactUsTemplate, data);
      console.log(compiledTemplate);
      this.$el.html(compiledTemplate);
    }
  });
  // Our module now returns our view
  return ContactUsPageView;
});