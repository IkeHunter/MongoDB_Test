const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) remove multipe records
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove removes first record, also prints out its data
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5ba20e2ec58355444ce90047'}).then((todo) => {
//
// })
//
// Todo.findByIdAndRemove('5ba20e2ec58355444ce90047').then((todo) => {
//   console.log(todo);
// })
