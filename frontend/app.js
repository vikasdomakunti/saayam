// Filename: app.js
var $ = require('jquery');
    window.$ = $,
    window.jQuery = $,
    _ = require('underscore'),
    Backbone = require('backbone'),
    Router = require('./router');

var App = Router.initialize();
module.export = App;