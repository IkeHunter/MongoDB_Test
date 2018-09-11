var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

/**
var anotherTodo = new Todo({
  text: 'Someting'
});

anotherTodo.save().then((doc) => {
  console.log('Saved Todo');
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save Todo', e);
});
**/
