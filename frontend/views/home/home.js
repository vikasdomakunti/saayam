// Filename: views/project/list
define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone){
    var HomePageView = Backbone.View.extend({
        el: $('#container'),
        render: function(){
            // Using Underscore we can compile our template with data
            var data = {};
        }
    });
    // Our module now returns our view
    return HomePageView;
});