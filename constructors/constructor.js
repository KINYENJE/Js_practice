// create a mouse object that has two properties and two methods

let mouse = {}   /**  literal notation */

mouse.name = 'Mickey'
mouse.color = 'black'
mouse .wireless = true
mouse.intro = (name) => console.log(`Mouse name is ${name}`) 
// mouse.intro(mouse.name)
mouse.showColor = (colour) => console.log(`Mouse color is ${colour}`)
// mouse.showColor(mouse.color)


// constructor example
function MakeCar(carMake,carModel,carColor,numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors

    this.honk = function(){
        alert("PII PIII")
    }
    this.lock = function(){
        console.log(`Lock this ${this.make} doors`)
    }

}

let m5_CS = new MakeCar('BMW','M5','GRAY',4);

let c63s = new MakeCar('Mercedes','C-Class','silver',4)

let chiron = new MakeCar('Bugatti', 'Chiron', 'Black',2)


// to add a property to the construcor that was initially not there
MakeCar.prototype.bluetooth = true

// chiron.bluetooth will output true



/* ...create a street fighter constructor that makes 
* fighting game characters with 4 properties and 3 methods */

function StreetFighter(fighterName,fighterAge,fighterAction){
    this.name = fighterName
    this.age = fighterAge
    this.action = fighterAction
    this.skill = () => console.log(`Fighter ${this.action}`)
    this.winner = () => console.log(`${this.name} won the fight`)
    this.loser = () => console.log(`${this.name} lost the fight`)

}

let jack = new StreetFighter('Jack',21,'punch')
