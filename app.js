let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

module.exports = server; // for testing