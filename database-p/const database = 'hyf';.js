const database = 'hyf';
const collection = 'users';
use(database);
db.createCollection(collection);

db.users.insertOne({ name: "Lawan", email: "lawansubba@gmail.com"});
db.users.insertOne({ name: "harry", email: "harry@gmail.com", age: 20 });
db.users.insertOne({ name: "bob", email: "bob@gmail.com", age: 20, address: "Aarhus" });
db.users.insertOne({ name: "hadis", address: "riskov aarhus", age: 23, country: "Denmark" });


// -- MongoDb
db.users.find({name: 'bob'});
// -- MySQL Select * from users;



db.users.countDocuments({age:20});

db.users.updateOne({name :'bob'}, {$set :{age:30}}) ;

db.users.deleteOne({age:20});

db.users.updateOne({name :'hadis'}, {$set :{address:'alborg'}}) ;

db.users.find({name: 'hadis'});

db.users.updateOne({name :'hadis'}, {$set :{address:'alborg'}}) ;

db.users.deleteOne({address:'alborg'});

db.users.find({"age" : {"$gte" : 10, "$lte" : 30}});

// db.users.drop()