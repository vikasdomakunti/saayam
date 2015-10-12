var $ = require('jquery'), _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE = require('../../templates/home/home.hbs');

var HomePageView = Backbone.View.extend({
  el: $('#home'),
  render: function() {
    var data = {};
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = HomePageView;