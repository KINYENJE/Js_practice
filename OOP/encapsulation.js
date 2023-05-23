/** Bad CODE */

let hourlyRate = 250
let hours = 160
let taxRate = .35

function calcProfit(rate, numOfHours, taxes){
    return rate * numOfHours * (1-taxes)
}

function holdForTaxes(profitMade){
    return hourlyRate * hours - profitMade
}

let profit = calcProfit(hourlyRate, hours, taxRate)

let taxesHeld = holdForTaxes(profit)

console.log(profit)
console.log(taxesHeld)



/*** ==========ENCAPSULATION OOP CODE */

let seriousOOP = {
    hourlyRate:250,
    hours: 160,
    taxRate: .35,
    calculateProfit: () => {
        return this.hourlyRate * this.hours * (1- this.taxRate)
    },
    calculateTaxesHeld: () => {
        return this.hourlyRate*this.hours - this.calculateProfit()
    }
}