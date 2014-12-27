/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var Board = require('./board');

var store = require('../../stores/game-store');

module.exports = React.createClass({
    mixins: [Router.State],

    getInitialState: function() {
        var game = store.getById(this.getParams().gameId);
        return {
            game: game
        }
    },

    render: function() {
        var game = this.state.game,
            title = game.title;
        return (
            <div className="edit-game">
                <h4>{title}</h4>
                <RouteHandler />
            </div>
        );
    }
});
