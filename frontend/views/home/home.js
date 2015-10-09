define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/home.html'
], function($, _, Backbone, HomeTemplate){
    var HomePageView = Backbone.View.extend({
        el: $('#container'),
        render: function(){
            var data = {};

            var compiledTemplate = _.template(HomeTemplate,data);
            console.log(compiledTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    return HomePageView;
});