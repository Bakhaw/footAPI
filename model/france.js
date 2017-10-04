const mongoose = require('mongoose');
let Schema     = mongoose.Schema;

let team = new Schema({
  team_name: String,
  players: {
    name: String,
    role: String
  }
});

module.exports = mongoose.model('Team', team);
