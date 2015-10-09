// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/navbar/navbar',
    'views/home/home',
    'views/about-us/about-us'
], function($, _, Backbone, NavbarView,HomePageView,AboutUsPageView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '*path': 'home',
            'about-us': 'about-us',
            'users': 'showUsers',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        var navbarView = new NavbarView();
        navbarView.render();
        app_router.on('route:home', function(){
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            var homePageView = new HomePageView();
            homePageView.render();
        });
        app_router.on('route:about-us', function(){
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            var aboutUsPageView = new AboutUsPageView();
            aboutUsPageView.render();
        });
        // As above, call render on our loaded module
        // 'views/users/list'
        app_router.on('route:defaultAction', function(actions){
            // We have no matching route, lets just log what the URL was
            console.error('No route defined for this action!', actions);
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});