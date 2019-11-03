
var _ = require('underscore');
var BaseView = require('../../base/BaseView.js');
var viewTemplate = require('./templates/song.html');

var SongView = BaseView.extend({

    template: _.template(viewTemplate),
    el: '#song',

    events: {
        'click button': 'buttonPressed'
    },

    initialize: function(options) {
        this.model = options.model;
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },
    buttonPressed: function() {
        alert("Hop!");
    }
});

module.exports = SongView;
