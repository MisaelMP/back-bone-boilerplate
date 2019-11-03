const Backbone = require('backbone');
const SongRouter = require('./modules/song/SongRouter.js');
const StartRouter = require('./modules/start/StartRouter.js');

const App = {
    initialize : function() {

        new StartRouter();
        new SongRouter();
        Backbone.history.start();
    }
};

App.initialize();
