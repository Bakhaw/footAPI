const mongoose = require('mongoose');
let Schema     = mongoose.Schema;

let team2 = new Schema({
  team_name: String,
  players: {
    name: String,
    role: String
  }
});

module.exports = mongoose.model('Team2', team2);
