/** e will also create an external JavaScript file to execute a PUT request. According to Express conventions, this JavaScript is kept in a folder called public */


const update = document.querySelector('#update')

update.addEventListener('click', () => {
    /* send PUT request here.In this case, let’s say we want to send the request to /quotes. We’ll set endpoint to /quotes.*/
    fetch('/quotes', {
        method: 'put',
            /** tell the server we’re sending JSON data by setting the Content-Type headers to application/json. */
        headers: {'Content-Type': 'application/json'},
            /** convert the data we send into JSON. We can do this with JSON.stringify. This data is passed via the body property. */
        body: JSON.stringify({
            name: 'Nyandarua',
            quote: 'Cash crop ni waru',
        }),
    })
})



