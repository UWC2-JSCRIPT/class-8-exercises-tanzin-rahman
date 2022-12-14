const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

class myDate {
  constructor(YYYY, MM, DD){
    this.YYYY = YYYY;
    this.MM = MM;
    this.DD = DD;
  }
}  

let formattedDate;

const getTheUserDate = formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const theUserDate = new myDate(year, month, date)
  return theUserDate;
});

mydate = new Date(`${year}-${month}-${date}`);
formattedDate = `${mydate.getFullYear()}-${mydate.getMonth()+1}-${mydate.getDate()}`;
console.log(formattedDate);

const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/overview.json`

const API_KEY = `GlddTXRM6F5TlrCalMB8mTHUQYciQEyF`

const formInput = formattedDate;

const url = `${BASE_URL}?q=${formatInput}&api-key=${API_KEY}`;

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then((responseJson) => {
    console.log(responseJson)
  }) 