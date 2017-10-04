const express    = require('express');
const app        = express();
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const cors       = require('cors');

let Team         = require('./model/france');
let Team2        = require('./model/bresil');
let Team3        = require('./model/allemagne');

// setup mongoose
mongoose.connect('mongodb://localhost/foot-api');

// setup cors
app.use(cors());

// setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routes

// GET METHOD

// TEAM 1
app.get('/teams/france', (req, res) => {
  Team.find({}, (err, team) => {
    if (err) res.json({error: 'could not get the team', err});
    res.send(team);
  })
});

// TEAM 2
app.get('/teams/bresil', (req, res) => {
  Team2.find({}, (err, team) => {
    if (err) res.json({error: 'could not get the team', err});
    res.send(team);
  })
});

// TEAM 3
app.get('/teams/allemagne', (req, res) => {
  Team3.find({}, (err, team) => {
    if (err) res.json({error: 'could not get the team', err});
    res.send(team);
  })
});

// TEAMS
app.get('/teams', (req, res) => {
  let Teams = [];
  Team.find({}, (err, teams) => {
    if (err) res.json({error: 'could not get the team', err});
    Teams.push(teams);
  })
  Team2.find({}, (err, teams) => {
    if (err) res.json({error: 'could not get the team', err});
    Teams.push(teams);
  })
  Team3.find({}, (err, teams) => {
    if (err) res.json({error: 'could not get the team', err});
    Teams.push(teams);
  })
  setTimeout(function () {
    res.send(Teams)
  }, 200);
});

// POST METHOD

// TEAM 1
app.post('/teams/france', (req, res) => {
  let team = new Team();
  team.team_name      = req.body.team_name;
  team.players.name   = req.body.players.name;
  team.players.role   = req.body.players.role;
  team.save((err, saveTeam) => {
    if (err) res.json({error: 'could not save the team', err});
    res.send(saveTeam);
  })
});

// TEAM 2
app.post('/teams/bresil', (req, res) => {
  let team2 = new Team2();
  team2.team_name      = req.body.team_name;
  team2.players.name   = req.body.players.name;
  team2.players.role   = req.body.players.role;
  team2.save((err, saveTeam) => {
    if (err) res.json({error: 'could not save the team', err});
    res.send(saveTeam);
  })
});

// TEAM 3
app.post('/teams/allemagne', (req, res) => {
  let team3 = new Team3();
  team3.team_name      = req.body.team_name;
  team3.players.name   = req.body.players.name;
  team3.players.role   = req.body.players.role;
  team3.save((err, saveTeam) => {
    if (err) res.json({error: 'could not save the team', err});
    res.send(saveTeam);
  })
});

// PUT METHOD

// TEAM 1
app.put('/teams/france/:id', (req, res) => {
  const _id = req.params.id;
  Team.findOneAndUpdate({_id}, req.body, {new: true}, (err, updatedTeam) => {
    if (err) res.send({error: 'could not update the team', err});
    res.json({message: 'Team successfully updated!', updatedTeam});
  });

});

// TEAM 2
app.put('/teams/bresil/:id', (req, res) => {
  const _id = req.params.id;
  Team2.findOneAndUpdate({_id}, req.body, {new: true}, (err, updatedTeam) => {
    if (err) res.send({error: 'could not update the team', err});
    res.json({message: 'Team successfully updated!', updatedTeam});
  });

});

// TEAM 3
app.put('/teams/allemagne/:id', (req, res) => {
  const _id = req.params.id;
  Team3.findOneAndUpdate({_id}, req.body, {new: true}, (err, updatedTeam) => {
    if (err) res.send({error: 'could not update the team', err});
    res.json({message: 'Team successfully updated!', updatedTeam});
  });

});

// DELETE METHOD

// TEAM 1
app.delete('/teams/france/:id', (req, res) => {
  const _id = req.params.id;
  Team.remove({_id}, (err, deletedTeam) => {
    if (err) res.send({erorr: 'could not delete the team'}, err);
    res.json({message: 'Team successfully deleted', deletedTeam});
  })
});

// TEAM 2
app.delete('/teams/bresil/:id', (req, res) => {
  const _id = req.params.id;
  Team2.remove({_id}, (err, deletedTeam) => {
    if (err) res.send({erorr: 'could not delete the team'}, err);
    res.json({message: 'Team successfully deleted', deletedTeam});
  })
});

// TEAM 3
app.delete('/teams/allemagne/:id', (req, res) => {
  const _id = req.params.id;
  Team3.remove({_id}, (err, deletedTeam) => {
    if (err) res.send({erorr: 'could not delete the team'}, err);
    res.json({message: 'Team successfully deleted', deletedTeam});
  })
});

// connection to port
app.listen(3004, () => {
  console.log('Connected on port: 3004...');
});
