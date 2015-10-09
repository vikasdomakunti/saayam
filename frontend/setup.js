// Filename: setup.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: '../libraries/jquery/index',
        underscore: '../libraries/underscore/index',
        backbone: '../libraries/backbone/index',
        text:'../libraries/require/scripts/text',
        bootstrap: '../libraries/bootstrap/js/bootstrap',
        react: '../node_modules/react/react'
    },
    shim:{
        bootstrap:['jquery']
    }


});

require([
    'app'
], function(App){
    App.initialize();
});