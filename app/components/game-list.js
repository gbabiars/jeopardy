/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var gameStore = require('../stores/game-store');

module.exports = React.createClass({

    mixins: [Router.Navigation],

    getInitialState: function() {
        return {
            games: gameStore.getAll()
        };
    },

    createGame: function(e) {
        e.preventDefault();
        var title = this.refs.title.getDOMNode().value.trim();
        this.refs.title.getDOMNode().value = '';

        var game = gameStore.createGame(title);

        this.transitionTo('edit-game', { params: game });
    },

    render: function() {
        var gameListItems = this.state.games.map(function(g) {
            return <li key={g.id}>{g.title}</li>
        });

        var list;

        if(gameListItems.length) {
            list = (
                <ul>
                    {gameListItems}
                </ul>
            );
        } else {
            list = <div>There are no games to display</div>;
        }

        return (
            <div>
                <form onSubmit={this.createGame}>
                    <input type="text" ref="title" />
                    <input type="submit" value="Create" />
                </form>
                {list}
            </div>
        );
    }
});
