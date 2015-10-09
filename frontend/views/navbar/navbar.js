// Filename: views/project/list
define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'text!templates/navbar/navbar.html'
], function($, _, Backbone,Bootstrap, navbarTemplate){
    var ProjectListView = Backbone.View.extend({
        el: $('#navbar'),
        render: function(){
            // Using Underscore we can compile our template with data
            var data = {};

            var compiledTemplate = _.template(navbarTemplate,data);
            console.log(this.$el);
            // Append our compiled template to this Views "el"
            this.$el.html(compiledTemplate);
        }
    });
    // Our module now returns our view
    return ProjectListView;
});