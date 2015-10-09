define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/team/team.html'
], function($, _, Backbone, TeamTemplate){
    var TeamPageView = Backbone.View.extend({
        el: $('#container'),
        render: function(){
            var data = {};

            var compiledTemplate = _.template(TeamTemplate,data);
            console.log(compiledTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    // Our module now returns our view
    return TeamPageView;
});