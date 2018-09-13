const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b9a2a75b588f51f38a8929111';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '5b9a2f780941d2ebe108217b';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log(JSON.stringify(user, undefined, 2));

}, (e) => {
  console.log(e);
});

//No user
//User was found
//error
