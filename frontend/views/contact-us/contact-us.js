  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE =  require('../../templates/kids/kids.hbs');

var ContactUsPageView = Backbone.View.extend({
  el: $('#contact-us'),
  render: function() {
    var data = {};
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = ContactUsPageView;