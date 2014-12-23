/** @jsx React.DOM */

var React = require('react');

var boardStore = require('../stores/board-store');

module.exports = React.createClass({

    render: function() {
        var boards = boardStore.getAll();

        var boardListItems = boards.map(function(b) {
            return <li>{b.title}</li>
        });

        var list;

        if(boardListItems.length) {
            list = (
                <ul>
                    {boardListItems}
                </ul>
            );
        } else {
            list = <div>There are no boards to display</div>;
        }

        return (
            <div>
                {list}
            </div>
        );
    }

});
