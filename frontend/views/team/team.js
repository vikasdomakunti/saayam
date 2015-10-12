var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  TEMPLATE =  require('../../templates/team/team.hbs');

var TeamPageView = Backbone.View.extend({
    el: $('#team'),
    render: function() {
        var data = {};
        //
        //var compiledTemplate = _.template(TEMPLATE, data);
        //console.log(compiledTemplate);
        this.$el.html(TEMPLATE(data));
    }
});

module.exports = TeamPageView;