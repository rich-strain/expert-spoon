const note = require('express').Router();

note.get('/', (req, res) => {
  res.json(`${req.method} request received to get notes`);
});

note.post('/', (req, res) => {
  res.json(`${req.method} request received to add a note`);
});

note.delete('/', (req, res) => {
  res.json(`req.method} request received to delete a note`);
});

module.exports = note;
