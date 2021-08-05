import express from 'express';

const app = express();

const handleincomingRequest = (req, res) => {
  console.log('request came in');
  res.send('yay');
};
const randNumGen = (max) => Math.floor(Math.random() * max) + 1;
const handleDiceRollReq = (req, res) => {
  console.log('request for dice roll came in ');
  // res.send('in dice rolls');
  res.send(`Dice rolled ${randNumGen(6)}`);
};

const handleTwoDiceRollReq = (req, res) => {
  console.log('request for two dice rolls came in ');
  const diceRoll1 = randNumGen(6);
  const diceRoll2 = randNumGen(6);

  res.send(`dice rolled ${diceRoll1} and ${diceRoll2} `);
};

app.get('/', handleincomingRequest);
app.get('/dice-rolls', handleDiceRollReq);
app.get('/two-dice-rolls', handleTwoDiceRollReq);
app.listen(3004);
