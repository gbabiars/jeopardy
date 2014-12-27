/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App = require('./components/app'),
    GameList = require('./components/game-list'),
    Game = require('./components/edit/game'),
    Board = require('./components/edit/board');

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="list-games" handler={GameList} />
        <Route name="edit-game" path="/games/:gameId" handler={Game}>
            <Route name="edit-board" path=":round" handler={Board} />
        </Route>
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.body);
});
