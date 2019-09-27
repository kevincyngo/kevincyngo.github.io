const app = document.getElementById('quote');

const quoteContainer = document.createElement('div');
quoteContainer.setAttribute('class', 'quoteContainer');

const weatherContainer = document.createElement('div');
weatherContainer.setAttribute('class', 'weatherContainer');

app.append(quoteContainer);

var requestQOTD = new XMLHttpRequest();
requestQOTD.open('GET', 'https://api.quotable.io/random', true);

requestQOTD.onload = function () {

  var data = JSON.parse(this.response);
  if (requestQOTD.status >= 200 && requestQOTD.status < 400) {
    quoteContainer.textContent = data.content + " ~" + data.author;
  }
}

requestQOTD.send();

randomize = () => {
  requestQOTD.open('GET', 'https://api.quotable.io/random', true);
  requestQOTD.send();
}