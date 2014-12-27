/** @jsx React.DOM */

var React = require('react'),
    RouteHandler = require('react-router').RouteHandler;

module.exports = React.createClass({
    render: function() {
        return (
            <h1>Jeopardy</h1>
            <RouteHandler/>
        );
    }
});
