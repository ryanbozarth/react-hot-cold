import express from 'express'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());


let fewestGuesses = 'No guesses yet';

app.get('/fewest-guesses', (req, res) => {
  res.status(200).json({ fewestGuesses });
});

app.post('/fewest-guesses', (req, res) => {

});

app.listen(8080,  () => {
  console.log('Listening on port 8080');
})
