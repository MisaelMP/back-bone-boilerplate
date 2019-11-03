var Backbone = require('backbone');

var Song = Backbone.Model.extend({
	defaults: {
		'title': 'here',
	},
	validate: function(attrs) {
		if (!attrs.title) {
			return 'Title is required';
		}
	}
});

const song = new Song();
song.isValid();
const lastError = song.validationError;

module.exports = Song;
