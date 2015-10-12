var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE =  require('../../templates/timeline/timeline.hbs');

var TimelinePageView = Backbone.View.extend({
  el: $('#timeline'),
  render: function() {
    var data = {};
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = TimelinePageView;