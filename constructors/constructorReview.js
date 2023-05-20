class Espresso{
    constructor (name,model,color,price){
        this.name = name
        this.model = model
        this.color = color
        this.price = price

        this.mix = () => {
            console.log(`mix ${this.model}`)
        }

        
    }
    turnOn(){
        console.log(`good day. ${this.name}`)
    }

    
}

let gaggia = new Espresso('gaggia', 'sony','red', 400)
console.log(gaggia)