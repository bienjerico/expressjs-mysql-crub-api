var express = require('express');
var app = express();

// middleware
app.set('port', (process.env.PORT || 3002));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var comment = require('./router/comment');
app.use('/api',comment);

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
