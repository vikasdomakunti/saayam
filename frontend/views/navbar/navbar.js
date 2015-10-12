var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE = require('../../templates/navbar/navbar.hbs');
var NavbarView = Backbone.View.extend({
  el: $('#navbar'),
  events: {
    'click .nav.navbar-nav li a': 'activateCurrentLink'
  },
  activateCurrentLink: function(e) {
    $(e.currentTarget).parent().parent().find('.active').removeClass('active');
    $(e.currentTarget).parent().addClass('active');
  },
  render: function() {
    var data = {};
    //var compiledTemplate = _.template(TEMPLATE,data);
    //console.log(this.$el);
    //this.$el.html(compiledTemplate);
    this.$el.html(TEMPLATE(data));
  }
});

module.exports = NavbarView;