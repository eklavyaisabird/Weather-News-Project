

const API_KEY = "b029201ed31848d9a39905d951266fe9";

// fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}')
// .then(res => console.log(res))

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           `apiKey=${API_KEY}`;
// var req = new Request(url);
// fetch(req)
//     .then((response) => { return response.json()})
//     .then(res => {

//     })
//     .then(data => console.log(data))

async function getThreeArticles(country, apiKey) {

    var url = 'https://newsapi.org/v2/top-headlines?' +
          `country=${country}&` +
          `apiKey=${apiKey}`;

    var req = new Request(url);

    const response = await fetch(req);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const topThreeArticles = data.articles.slice(0, 3);
    
    const formattedNews = topThreeArticles.map(article => ({
      title: article.title,
      url: article.url
    }));

    return formattedNews;
}


getThreeArticles('us', API_KEY).then(x => console.log(x))

