var _ = require('lodash'),
    firebase = require('../firebase'),
    boards = [];

function createTile(column, row) {
    return {
        column: column,
        row: row,
        value: row * 100
    };
}

function createColumn(column) {
    var tiles = _.times(5, function(i) {
        return createTile(column, i + 1);
    });
    return {
        column: column,
        name: 'Category' + column,
        tiles: tiles
    };
}

function createBoard(title) {
    var columns = _.times(6, function(i) {
        return createColumn(i + 1);
    });
    return {
        title: title || '',
        columns: columns
    };
}

boards.push(createBoard('Board One'));
boards.push(createBoard('Board Two'));

module.exports = {

    getAll: function() {
        return boards;
    }

};
