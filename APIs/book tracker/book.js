
document.querySelector('.submit-btn').addEventListener('click', getBook)
document.getElementById('bookName').innerText = localStorage.getItem('books')

function getBook(){
    choice = document.querySelector('.bookText').value
    
    fetch(`https://openlibrary.org/isbn/${choice}.json`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.title)

            if(!localStorage.getItem('books')){
                localStorage.setItem('books', data.title)
                
            }else{
                let books = localStorage.getItem('books') + " ; " + data.title
                localStorage.setItem('books', books)
            }

            

           
            console.log(localStorage.getItem('books'))

            document.getElementById('bookName').innerText = localStorage.getItem('books')
        })
}

