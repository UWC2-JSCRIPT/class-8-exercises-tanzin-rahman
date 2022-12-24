document.addEventListener('DOMContentLoaded', ready)
function ready() {

  const formEl = document.getElementById('best-books-form')

  const getTheUserDate = formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const dateEl = document.getElementById("date")
    let dateEntered = new Date();
    let input = dateEl.value;
    dateEntered = new Date(input);
    console.log(input); //e.g. 2015-11-13
    console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

    let formatDate = (dateEntered).toISOString().split('T')[0];
    //let formattedDate = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`;

    //let list = `hardcover-fiction`
    let type = document.getElementById('type');
    let list_id = document.getElementById('type').value;
    let list = type.options[type.selectedIndex].text;

    const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/`

    const API_KEY = `GlddTXRM6F5TlrCalMB8mTHUQYciQEyF`

    const url = `${BASE_URL}${formatDate}/${list}.json?api-key=${API_KEY}`;

    console.log(url)


    fetch(url)
      .then(function (data) {
        return data.json();
      })
      .then((responseJson) => {
        let bookContainer = document.getElementById('books-container');
        bookContainer.innerHTML = '';
        console.log(responseJson)
        let number_of_books = responseJson.results.books.length;
        let rowDiv = createRowDiv();
        for (let index = 0; index < number_of_books; index++) {
          let book = responseJson.results.books[index];
          let newDiv = createBookDiv(book)
          rowDiv.appendChild(newDiv);
          if ((index + 1) % 4 == 0) {
            bookContainer.appendChild(rowDiv);
            rowDiv = createRowDiv();
          }
        }
      });
  });
}


// create new row div to accomulate more books
// if the row is already filled with 4 items
function createRowDiv() {
  const newDiv = document.createElement("div");
  newDiv.classList.add('row')
  return newDiv;
}

// for each book, create a new div, add it to the div
// when a user hover the mouse on a particular book div,
// the book detail info in a new detail div.
function createBookDiv(book) {
  const newDiv = document.createElement("div");
  newDiv.classList.add('col-md-3')
  //create a new image 
  const img = document.createElement('img');
  const imageUrl = `${book.book_image}`;
  console.log(imageUrl)
  img.setAttribute("src", imageUrl);
  img.width = '120'
  //img.width = '100%'
  //img.classList.add("col-md-2")

  //add the image to the newly created div
  newDiv.appendChild(img);

  const bookTitle = document.createElement('span')
  bookTitle.innerText = formatBookTitle(book.title)
  bookTitle.classList.add('book-title');
  newDiv.appendChild(bookTitle)

  const descriptionDiv = document.getElementById('description-container');
  descriptionDiv.classList.add('description-container');

  // // Show description DIV on hover
  newDiv.addEventListener('mouseover', function handleMouseOver() {
    descriptionDiv.innerHTML = `<b>Book Title:</b> ${book.title} <br><b>Author:</b> ${book.author} <br><b>Description:</b> ${book.description}`

    // 👇️ if you used visibility property to hide div
    descriptionDiv.style.visibility = 'visible';
  });
  // //  (optionally) Hide DIV on mouse out
  newDiv.addEventListener('mouseout', function handleMouseOut() {
    descriptionDiv.innerHTML = "";
    // 👇️ if you used visibility property to hide div
    descriptionDiv.style.visibility = 'hidden';
    // dispatch event again!
  });

  return newDiv;
}

function formatBookTitle(title) {
  return title.substr(0, 1) + title.substr(1).toLowerCase()
}