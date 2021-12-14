const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const api = express.Router();
const auth = express.Router();

var messages = [ { text: 'some text', owner: 'Tim' }, { text: 'other message', owner: 'Jane' } ];
var users = [];

app.use((req, res, next) => {
  req.header('Access-control-Allow-Origian', '*');
  req.header('Access-control-Allow-headers', 'Origian, X-Requested-With, Content-Type, Accept');
  next();
})

app.use(cors());
app.use(bodyParser.json());

api.get('/messages', ( req, res )=> {
  console.log(messages);
  res.json(messages);
});

api.get('/messages/:user', (req, res) => {
  let user = req.params.user;
  let result = messages.filter( message => message.owner == user);

  res.json(result);
});

api.post('/messages', (req, res) => {
  messages.push(req.body);
  res.json(req.body);
});

auth.post('/register', (req, res)=> {
  var index = users.push(req.body) - 1;

  var user = users[index];
  user.id = index;

  var token = jwt.sign( user.id, '123' );
  res.json(token);
});

app.use('/api', api);
app.use('/auth', auth);

app.listen(3000, ()=> {
  console.log('Server Started at Port 3000');
});