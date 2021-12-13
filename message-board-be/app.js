const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const api = express.Router();

var messages = [ { text: 'some text', owner: 'Tim' }, { text: 'other message', owner: 'Jane' } ];

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

app.use('/api', api);

app.listen(3000, ()=> {
  console.log('Server Started at Port 3000');
});