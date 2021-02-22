const express = require('express');
const app = express();

const path = require('path');
const morgan = require('morgan');
const url = require('url');
const bodyParser = require('body-parser');

const debug = require('./libs/debug');

const PORT = process.env.PORT || 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

process.env.NODE_ENV !== 'prod' ? app.use(
          morgan('dev', {
              skip: (req, res) => res.statusCode === 304,
          })
      )
    : null;

app.get('/', (req,res) => {
  res.render('index');
})

app.listen(PORT, ()=> {
  console.info('Listening on PORT', `${debug.colored.green}${PORT}${debug.colored.reset}`);
})