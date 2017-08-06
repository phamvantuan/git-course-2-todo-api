// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('59837717f731b50310ef5c5c')
	// }).toArray().then((docs) => {
	// 		console.log('Todos');
	// 		console.log(JSON.stringify(docs,undefined,2));
	// },(err) => {
	// 	console.log('Unable to fetch todos',err);
	// });
	// db.collection('Todos').find().count().then((count) => {
	// 		console.log(`Todos count: ${count}`);
			
	// },(err) => {
	// 	console.log('Unable to fetch todos',err);
	// });
	db.collection('Users').find({name: 'Tuanpham'}).toArray().then((data) => {
			console.log(data);
	},(err) => {
			console.log(err);
	});

	// db.close();
});