var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (e) => {
  console.log('Unable to save Todo');
});

var anotherTodo = new Todo({
  text: 'Walk the dog',
  completed: true,
  completedAt: 5.00
});

anotherTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (e) => {
  console.log('Unable to save Todo', e);
});
