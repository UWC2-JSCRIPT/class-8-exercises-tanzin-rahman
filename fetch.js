const BASE_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

//const API_KEY = `j6sQNS2l6EJQq7muKL4TAyh61erICkTN`

const formInput = 'cars';

const url = `${BASE_URL}?q=${formInput}&api-key=${API_KEY}`;

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then((responseJson) => {
    console.log(responseJson)

    let article = responseJson.response.docs[4];
    console.log(article);


    let a = document.getElementById('article-link');
    a.href = "https://www.nytimes.com/2022/12/09/sports/autoracing/f1-max-verstappen-red-bull.html"

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    const author = article.byline.original;
    console.log(author);
    document.getElementById('article-author').innerText = author;

    const snip = document.createElement('p');
    snip.innerText = article.snippet;
    document.querySelector('.container').appendChild(snip);

    const paragraph = document.createElement('p');
    paragraph.innerText = article.lead_paragraph;
    document.querySelector('.container').appendChild(paragraph);

    if (article.multimedia.length > 0) {
      const imageUrl = `https://www.nytimes.com/${article.multimedia[0].url}`
      //console.log(imageUrl)
      document.getElementById('article-img').src = imageUrl;
    }
  })



