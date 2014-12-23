/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App = require('./components/app'),
    BoardList = require('./components/board-list');

var routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="board-list" handler={BoardList} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.body);
});
