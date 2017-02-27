const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')

const app = express();
app.use(bodyParser.json());
app.use(express.static('build'));


// let fewestGuesses = 'No guesses yet';

app.get('/', (req, res) => {
  res.sendFile(path.resolve('build/index.html'))
});

app.get('/fewest-guesses', (req, res) => {
  res.status(200).json(JSON.parse(fs.readFileSync(path.resolve('./db.json'), 'utf8')));
});

app.post('/fewest-guesses', (req, res) => {
  const numberGuesses = req.body.numberGuesses || null
  const data = JSON.parse(fs.readFileSync(path.resolve('./db.json'), 'utf8'))
  if(numberGuesses < data.fewestGuesses) {
    fs.writeFileSync(path.resolve('./db.json'), JSON.stringify({fewestGuesses: numberGuesses}), 'utf8')
  }
  res.json(JSON.parse(fs.readFileSync(path.resolve('./db.json'), 'utf8')));
});

app.listen(8080,  () => {
  console.log('Listening on port 8080');
})
