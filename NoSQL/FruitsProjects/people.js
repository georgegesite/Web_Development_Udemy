const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/peopledb', {useNewUrlParser: true});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//Create
const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Required']
      },
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
const freak = new People({
    name:"Freak",
    age:10
})
// INSERT TO DB
freak.save();




// People.insertMany([george, flom, freak]);


//Read 
async function showDocuments() {
    const ppl = await People.find();
    // console.log(ppl);
    mongoose.connection.close();
    ppl.forEach(function(human){
        console.log(human.name);
    })

}


// Update Data

async function UpdateName()
{
    await People.updateOne({ _id: "64ec86ca31c54c9df3bcc0a5" }, { name: 'Flom and George' });
}
// UpdateName();


//Delete Data
var fname = "George Gesite";
async function deletePeople(){
    await People.deleteOne({name: fname });
    console.log(`Sucessfully deleted ${fname}`);
}
// deletePeople();

async function deleteManyPeople()
{
    // await Character.deleteMany({ name: /Stark/, age: { $gte: 18 } }); /
    await People.deleteMany({name: fname});
    console.log(`Sucessfully deleted ${fname}`);
}
// deleteManyPeople();
showDocuments();