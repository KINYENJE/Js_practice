/*const person ={
    name: 'James Njenga',
    age: 22
}

module.exports = person;
*/
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting = () => {
        console.log(`my name is ${this.name}`)
    }
}

module.exports = Person