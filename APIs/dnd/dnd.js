document.querySelector('button').addEventListener('click', getSpell)

function getSpell(){
    const choice = document.querySelector('input').value

    fetch(`https://www.dnd5eapi.co/api/spells/${choice}/`)
        .then(res => res.json())
        .then(data => {
            console.log(data.subclasses)

            var unOrdered = document.querySelector('ul')

            removeChild = (un) => {
                // while(un.firstElementChild){
                //     un.firstElementChild.remove();
                // }
                
                un.innerHTML = ""

            }
            removeChild(unOrdered)
            
            data.subclasses.forEach(element => {
                console.log(element.name)

                
                
                var li = document.createElement('li')
                

                li.textContent = element.name

                document.querySelector('ul').appendChild(li)
                
                
            });
            var className = data.classes[0].name
            var subClassName = data.subclasses[0].name
            // document.querySelector('h3').innerHTML = className  
            // document.querySelector('h4').innerHTML = subClassName
            // console.log(subClassName)
        })

        .catch(err => {
            console.log(`${err}`)
        })
}


