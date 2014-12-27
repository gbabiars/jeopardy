/** @jsx React.DOM */

var React = require('react');

var Tile = require('./tile');

module.exports = React.createClass({
    render: function() {
        var column = this.props.column;
        var tiles = column.tiles.map(function(tile) {
            return <Tile tile={tile} />
        });
        return (
            <div className="edit-column">
                <h4 className="edit-column__header">{column.name}</h4>
                <div className="edit-column__body">
                    {tiles}
                </div>
            </div>
        );
    }
});
