const mongoose = require("mongoose")



const password = process.argv.length === 3 ? process.argv[2] : process.argv[4]

const url =
  `mongodb+srv://bk314:${password}@cluster0.jqcts.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model("Person", personSchema)

if (process.argv.length === 3) {
  console.log("phonebook:")
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3]
  })
  //console.log("aaaa");
  person.save().then(() => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}