const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const api = express.Router();

var messages = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];

app.use((req, res, next) => {
  req.header('Access-control-Allow-Origian', '*');
  req.header('Access-control-Allow-headers', 'Origian, X-Requested-With, Content-Type, Accept');
  next();
})

app.use(cors());
app.use(bodyParser.json());

api.get('/messages', ( req, res )=> {
  res.json(messages);
});

api.post('/messages', (req, res) => {
  console.log(true)
  messages.push(req.body);
  res.json(req.body);
});

app.use('/api', api);

app.listen(3000, ()=> {
  console.log('Server Started at Port 3000');
});