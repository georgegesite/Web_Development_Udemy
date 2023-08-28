const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/peopledb', {useNewUrlParser: true});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const People = mongoose.model('people', peopleSchema);

const george = new People({
    name: 'George Gesite',
    age: 22,
});
const flom = new People({
    name: 'Flora Mae Maninantan',
    age: 22,
});
const choco = new People({
    name: 'Choco Bear',
    age: 4,
});

// People.insertMany([george, flom, choco]);

async function shwoDocuments() {
    const ppl = await People.find();
    // console.log(ppl);
    mongoose.connection.close();
    ppl.forEach(function(human){
        console.log(human.name);
    })

}
shwoDocuments();