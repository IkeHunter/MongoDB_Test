var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// var anotherTodo = new Todo({
//   text: 'Someting'
// });
//
// anotherTodo.save().then((doc) => {
//   console.log('Saved Todo');
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save Todo', e);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
  email: 'example@gmail.com'
})

newUser.save().then((doc) => {
  console.log('Created user');
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to make user');
  console.log(JSON.stringify(e, undefined, 2));
})
