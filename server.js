var bitcoin = require('bitcoin');
var client = new bitcoin.Client({
  host: 'localhost',
  port: 8332,
  user: 'sonu',
  pass: 'Mobiloitte123'
});
 
client.getDifficulty(function(err, difficulty) {
  if (err) {
    return console.error(err);
  }
 
  console.log('Difficulty: ' + difficulty);
});

client.getBalance('*', 6, function(err, balance, resHeaders) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});