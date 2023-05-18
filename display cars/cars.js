//  capture all elements with the id of heading

const heads = document.querySelectorAll('#heading')

// captures all elements stored in the variable heads
// then takes each element and adds a click event listener then runs the function showcase
Array.from(heads).forEach(element => element.addEventListener('click' , showCase))

// function thats takes the item clicked on and displays image
function showCase(click) {
    if(click.target.classList.contains('chiron')){
        document.querySelector('#chiron-image').classList.toggle('hidden')
        document.querySelector('#gle-image').classList.add('hidden')


    }else if(click.target.classList.contains('gle')){
        document.querySelector('#gle-image').classList.toggle('hidden')
        document.querySelector('#chiron-image').classList.add('hidden')

    }else{
        alert('wewewewew')
    }
}