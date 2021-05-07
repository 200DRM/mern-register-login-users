const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require('./routes/userRoute');

app.use('/api/user', userRoute);

app.get('/', (req, res) => {
  res.end('This is backend');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});