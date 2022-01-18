require("dotenv").config();
require("./config/database").connect();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const api = express.Router();
const auth = express.Router();

app.use((req, res, next) => {
  req.header('Access-control-Allow-Origian', '*');
  req.header('Access-control-Allow-headers', 'Origian, X-Requested-With, Content-Type, Accept, Authorizaton');
  next();
})

app.use(cors());
app.use(bodyParser.json());

api.get('/messages', ( req, res )=> {
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

api.get('/users/me', checkAuthenticated, (req, res) => {
  res.status(200).json(users[req.user]);
});

api.post('/users/me', checkAuthenticated, (req, res) => {
  let user = users[req.user];

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;

  res.status(200).json(user);
});

auth.post('/login', ( req, res) => {
  var user = users.find( user => user.email == req.body.email );

  if(!user) {
    sendAuthError(res);
  } else if ( user.password == req.body.password ) {
    sendToken(user, res);
  } else {
    sendAuthError(res);
  }
});

auth.post('/register', (req, res)=> {
  var index = users.push(req.body) - 1;

  var user = users[index];
  user.id = index;

  sendToken(user, res);
});

function sendToken(user, res) {
  let token = jwt.sign( user.id, '123' );
  res.json({ firstName: user.firstName, token: token });
}

function sendAuthError(res) {
  return res.json({ success: false, message: 'email or password incorrect'})
}

function checkAuthenticated(req, res, next) {
  if( !req.header('authorization') ) {
    return res.status(401).send({message: ' Unauthorizaed Requested. Missing authentication header'});
  }

  var token = req.header('authorization').split(' ')[1];
  var decodedToken = jwt.decode(token, '123');

  if( !decodedToken ) {
    return res.status(401).send({ message: 'Unauthorized Requested. authentication header invalid'});
  } else {
    req.user = decodedToken;
  }

  next()
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(5000, ()=> {
  console.log('Server Started at Port 5000');
});