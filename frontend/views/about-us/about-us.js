var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE =  require('../../templates/about-us/about-us.hbs');

var AboutUsPageView = Backbone.View.extend({
  el: $('#about-us'),
  render: function() {
    var data = {};
    //
    //var compiledTemplate = _.template(TEMPLATE, data);
    //console.log(compiledTemplate);
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = AboutUsPageView;