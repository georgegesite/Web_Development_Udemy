const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB', {useNewUrlParser: true});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
  });

  const Fruit = mongoose.model('Fruits', fruitSchema);

  const fruit1 = new Fruit ({ name: 'Orange', rating: 1, review: "oranges are so good" });
  console.log(fruit1.name)

//   fruit1.save();