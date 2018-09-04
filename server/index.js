const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  const x = 5;
  const y = 7;
  const xy = x + y;
  res.status(200).send(xy);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
