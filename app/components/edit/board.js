/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Column = require('./column');

module.exports = React.createClass({
    mixins: [Router.State],

    render: function() {
        var board = this.props.board;
        var columns = board.columns.map(function(col) {
            return <Column column={col} />
        });
        return (
            <div className="edit-board">
                {columns}
            </div>
        );
    }
});
