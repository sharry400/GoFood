const mongoDB = require('./Database');
const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());
const port = 5000;
mongoDB()
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(express.json())
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})
app.use('/api/auth', require('./routes/user'))
app.use('/api', require('./routes/DisplayData'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});