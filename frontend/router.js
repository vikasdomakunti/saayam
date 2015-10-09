// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar/navbar',
  'views/home/home',
  'views/about-us/about-us',
  'views/the-beginning/the-beginning',
  'views/kid/kid',
  'views/timeline/timeline',
  'views/team/team',
  'views/contact-us/contact-us',
], function($, _, Backbone, NavbarView, HomePageView, AboutUsPageView,TheBeginningView,KidsView,TimelineView,TeamView,ContacUsView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'home',
      'about-us': 'about-us',
      'the-beginning': 'the-beginning',
      'kids': 'kids',
      'timeline': 'timeline',
      'team': 'team',
      'contact-us': 'contect-us',
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function() {
    var app_router = new AppRouter;
    var navbarView = new NavbarView();
    navbarView.render();
    app_router.on('route:home', function() {
      var homePageView = new HomePageView();
      homePageView.render();
    });
    app_router.on('route:about-us', function() {
      var aboutUsPageView = new AboutUsPageView();
      aboutUsPageView.render();
    });

    app_router.on('route:the-beginning', function() {
      var theBeginningView = new TheBeginningView();
      theBeginningView.render();
    });

    app_router.on('route:kids', function() {
      var kidsView = new KidsView();
      kidsView.render();
    });

    app_router.on('route:timeline', function() {
      var timelineView = new TimelineView();
      timelineView.render();
    });

    app_router.on('route:team', function() {
      var teamView = new TeamView();
      teamView.render();
    });

    app_router.on('route:contect-us', function() {
      var contacUsView = new ContacUsView();
      contacUsView.render();
    });
    app_router.on('route:defaultAction', function(actions) {
      console.error('No route defined for this action!', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});