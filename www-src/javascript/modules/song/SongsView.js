const _ = require('underscore');
const BaseView = require('../../base/BaseView.js');
const viewTemplate = require('./templates/song.html');

const SongsView = BaseView.extend({
	template: _.template(viewTemplate),
	el: '#songs',
	tagName: 'li',

	events: {
		'click button': 'buttonPressed'
	},

	initialize: function(options) {
		this.collection = options.collection;
	},
	render: function() {
		this.$el.html(this.template({
			songs: this.collection.toJSON()
		}));
		return this;
	},
	buttonPressed: function() {
		alert("Hop!");
	}
});

module.exports = SongsView;
