
function toCamelCase(str){
    const splitString = str.split("")
   
    while (splitString.includes("-") || splitString.includes("_")) {
        console.log("running")
        if (splitString.includes("-")) {
            const index = splitString.indexOf("-")
            splitString.splice(index, 1)            /** remove the dash  */
            splitString[index] = splitString[index].toUpperCase()
        }else if (splitString.includes("_")) {
            const index = splitString.indexOf("_")
            splitString.splice(index, 1)
            splitString[index] = splitString[index].toUpperCase()
        }      
    }


    console.log(splitString.join("")) 
}
    

toCamelCase("the-stealth-warrior")