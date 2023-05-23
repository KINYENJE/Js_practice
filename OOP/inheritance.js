class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}

class Chicken extends Animal{
    constructor(name,gender){
        super(name)
        this.type = gender
    }
    /** OVERIDE THE SPEAK FROM THE PARENT CLASS */
    speak(){
        console.log('kokoriko')
    }
    
}

let simba = new Dog('simba', 'shepherd')
let rooster = new Chicken('McDonald', 'Male')


/** PRIVATE PROPERTIES */

class Animal2{
    constructor(name){
        /** the underscore before name property */
        this._name = name
    }
    /** use get to allow us use name as a property instead of a methhod */
    get name(){
        return this._name
    }
    speak(){
        console.log (`${this._name} makes a sound`)
    }
}

class Dog2 extends Animal2{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}
class Cat2 extends Animal2{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }
}

let ndovu = new Animal2('ndovu') 
let lion = new Cat2('simba', 'shepherd')
let bosco = new Dog2('Bosco', 'kienyeji')
console.log(bosco.speak())

let farm = [ndovu, lion, bosco]


/** HERE IS WHERE WE OBSERVE POLYMORPHISM */
/** Code written to use an interface automatically knows how to work with any number of different objects that provide the interface. */
for (i of farm) {
    i.speak()
    
}