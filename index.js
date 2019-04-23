const PORT = process.env.PORT || 1337;
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');


app.use(bodyParser.json(), cors());

// Handler errors
// eslint-disable-next-line consistent-return
app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }

  res.status(500);
  res.send('500: Internal server error');
});

app.use('/', routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`CORS-enabled web server listening on port ${PORT}`);
  // eslint-disable-next-line no-console
  console.log(`Back end app listening on port ${PORT}!`);
});
