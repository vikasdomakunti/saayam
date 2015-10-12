var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE =  require('../../templates/the-beginning/the-beginning.hbs');

var TheBeginningPageView = Backbone.View.extend({
  el: $('#the-beginning'),
  render: function() {
    var data = {};
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = TheBeginningPageView;