var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE =  require('../../templates/kids/kids.hbs');

var KidPageView = Backbone.View.extend({
  el: $('#kids'),
  render: function() {
    var data = {};
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = KidPageView;