const Backbone = require('backbone');
const _ = require('underscore');
const Song = require('./SongModel.js');

const Songs = Backbone.Collection.extend({
  model: Song
});


module.exports = Songs;
