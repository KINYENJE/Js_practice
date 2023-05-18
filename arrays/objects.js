// create a stopwatch object that has four properties and three methods

var stopwatch = {}

// this are properties
stopwatch.hour = 15
stopwatch.minutes = 45
stopwatch.seconds = 56

// this are methods
stopwatch.tellHour = (hr) => {
    console.log(`Hour: ${hr}`)
}

// call the method
stopwatch.tellHour(stopwatch.hour)

stopwatch.tellMin = (min) => {
    console.log(`Minutes: ${min}`)
}

stopwatch.tellMin(stopwatch.minutes)

stopwatch.tellSeconds =(sec) => {
    return `Second: ${sec}`
}
console.log(stopwatch.tellSeconds(stopwatch.seconds))
