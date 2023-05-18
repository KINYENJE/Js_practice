
document.querySelector('#calculate').addEventListener('click', convert)

function convert() {
    const temp = document.querySelector('#cel-input').value
    var farh = temp * 9 / 5 + 32;
    const message = ` ${farh} \xB0C` 
    
    document.querySelector('#result').innerText = message;
}