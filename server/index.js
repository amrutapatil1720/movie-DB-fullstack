const express = require('express')
const app = express()
const port = 3003
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')))


app.get('/api/movies', (req, res) => {
  //console.log("getting response");
  res.send('Hello World!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))