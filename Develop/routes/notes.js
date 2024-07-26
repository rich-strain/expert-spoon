const notes = require('express').Router();

// require fs module
const fs = require('fs');
// require path module
const path = require('path');

// function to read the db.json file and return the notes
const readAndReturnNotes = () => {
  // read the db.json
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  // parse the data to get an array of objects
  const notes = JSON.parse(data);
  // return the notes
  return notes;
};

notes.get('/', (req, res) => {
  console.log(`GET request received to retrieve notes`);
  // read the db.json file and return the notes
  const notes = readAndReturnNotes();
  res.status(200).send(notes);
});

notes.post('/', (req, res) => {
  console.log(`Add ${req.body} to note(s)`);
  res.sendStatus(200);
});

notes.delete('/:id', (req, res) => {
  console.log(`${JSON.stringify(req.method)} request received to delete a note ID: ${req.params.id}`);
});

module.exports = notes;
