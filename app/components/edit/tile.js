/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        var tile = this.props.tile;
        return (
            <div className="edit-tile">
                {tile.value}
                <div>
                    <input type="text" placeholder="Question" ref="question" />
                </div>
                <div>
                    <input type="text" placeholder="Answer" ref="answer" />
                </div>
            </div>
        );
    }
});
