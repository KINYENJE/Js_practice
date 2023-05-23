function AgencyContractor(hourlyRate, hours, taxRate){
    this.hourlyRate = hourlyRate
    this.hours= hours
    this.taxRate= taxRate
    this.calculateProfit = function(){
        return this.hourlyRate * this.hours * (1- this.taxRate)
    }

    this.invoiceClient = function(){
        return `Your invoice total is ${this.hourlyRate * this.hours}`
    }
}

let james = new AgencyContractor(250, 160, .35) 
console.log(james.calculateProfit()) // 26000


/** ABSTRACTION OOP CODE */
function AgencyContractor(hourlyRate, hours, taxRate){
    this.hourlyRate = hourlyRate
    this.hours= hours
    this.taxRate= taxRate
    /**   this part */
    let calculateProfit = function(){
        return this.hourlyRate * this.hours * (1- this.taxRate)
    }

    this.invoiceClient = function(){
        return `Your invoice total is ${this.hourlyRate * this.hours}`
    }
}
