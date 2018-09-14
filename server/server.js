const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    // return insures it doesnt run rest of code
    return res.status(404).send('Not a valid id');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      //return console.log('Id not found');
    return res.status(404).send('No todos found');
    }

    res.send({todo});
    //uses {} because it sends it as object, later i cound add more things

  }).catch((e) => {
    res.status(404).send('Something went wrong');
  })

})

app.listen(3000, () => {
  console.log('Live on port 3000');
});

module.exports = {app};
