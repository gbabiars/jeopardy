var _ = require('lodash'),
    games = [];

function createTile(round, column, row) {
    return {
        column: column,
        row: row,
        value: row * round * 100
    };
}

function createColumn(round, column) {
    var tiles = _.times(5, function(i) {
        return createTile(round, column, i + 1);
    });
    return {
        column: column,
        name: 'Category' + column,
        tiles: tiles
    };
}

function createBoard(round) {
    var columns = _.times(6, function(i) {
        return createColumn(round, i + 1);
    });
    return {
        round: round,
        columns: columns
    };
}

function createGame(title) {
    var rounds = _.times(2, function(i) {
        return createBoard(i + 1);
    });
    return {
        id: title.replace(/\s+/g, '-').toLowerCase(),
        title: title,
        rounds: rounds
    };
}

module.exports = {
    getAll: function() {
        return games;
    },

    getById: function(id) {
        return JSON.parse(localStorage.getItem(id));
    },

    createGame: function(title) {
        var game = createGame(title);
        games.push(game);
        localStorage.setItem(game.id, JSON.stringify(game));
        return game;
    }
};
