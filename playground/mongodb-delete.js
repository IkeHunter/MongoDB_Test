// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name: 'Isaac'}).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b90f478cb332d363823a3aa')
  }).then((result) => {
    console.log(JSON.stirngify(results, undefined, 2));
  });

  // client.close();
});
