define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/about-us/about-us.html'
], function($, _, Backbone, aboutUsTemplate){
    var AboutUsPageView = Backbone.View.extend({
        el: $('#container'),
        render: function(){
            // Using Underscore we can compile our template with data
            var data = {};

            var compiledTemplate = _.template(aboutUsTemplate,data);
            console.log(this.$el);
            // Append our compiled template to this Views "el"
            this.$el.html(compiledTemplate);
        }
    });
    // Our module now returns our view
    return AboutUsPageView;
});