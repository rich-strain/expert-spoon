const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

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
  // create a new note object from request body
  let newNote = req.body;
  // add id key to the newNote object using uuidv4 for a unique id
  newNote.id = uuidv4();

  // read the current notes from db.json
  const notes = readAndReturnNotes();
  // add the new note to the notes array
  notes.push(newNote);

  // write the updated notes array back to db.json
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2));

  console.log(`Add ${JSON.stringify(req.body)} to note(s)`);

  res.sendStatus(200);
});

notes.delete('/:id', (req, res) => {
  console.log(`${JSON.stringify(req.method)} request received to delete a note ID: ${req.params.id}`);
});

module.exports = notes;
