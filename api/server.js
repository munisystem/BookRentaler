var express = require('express'),
books = require('./models/books');

var app = express();

app.configure(function () {
  app.use(express.logger('dev'));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.bodyParser());
});

app.get('/books', books.findAll);
app.get('/books/:id', books.findById);
app.put('/books/:id/:user', books.updateBook);

app.listen(3000);
console.log('Listening on port 3000...');
