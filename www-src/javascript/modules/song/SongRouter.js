const _ = require('underscore');
const BaseRouter = require('../../base/BaseRouter.js');
const Song = require('./SongModel.js');
const Songs = require('./SongCollection.js');
const SongsView = require('./SongsView.js');

const SongRouter = BaseRouter.extend({

	initialize: function(options) {

	},

	routes: {
		"songs": "viewSongs"
	},

	viewSongs: function() {
		this.showPage("songs", function() {
			const song = new Song();
			const songs = new Songs([
			  new Song({title: 'Song 1'}),
			  new Song({title: 'Song 2'}),
			  new Song({title: 'Song 3'}),
			]);

			songs.add(new Song({ title: 'Song 4' }));
			const songsView = new SongsView({
				collection: songs,
				id: "songs"
			});
			songsView.render();

		});
	}
});

module.exports = SongRouter;
