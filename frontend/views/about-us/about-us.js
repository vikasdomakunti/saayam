define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about-us/about-us.html'
], function($, _, Backbone, AboutUsTemplate){
    var AboutUsPageView = Backbone.View.extend({
        el: $('#about-us'),
        render: function(){
            var data = {};

            var compiledTemplate = _.template(AboutUsTemplate,data);
            console.log(compiledTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    return AboutUsPageView;
});