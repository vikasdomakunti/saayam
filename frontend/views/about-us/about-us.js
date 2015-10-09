define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about-us/about-us.html'
], function($, _, Backbone, aboutUsTemplate){
    var AboutUsPageView = Backbone.View.extend({
        el: $('#container'),
        render: function(){
            var data = {};

            var compiledTemplate = _.template(aboutUsTemplate,data);
            console.log(compiledTemplate);
            this.$el.html(compiledTemplate);
        }
    });
    // Our module now returns our view
    return AboutUsPageView;
});