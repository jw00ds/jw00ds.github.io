"use strict";

function fetchReadings() {
  return regeneratorRuntime.async(function fetchReadings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://breads-server.herokuapp.com/api/readings/21', {
            method: 'GET',
            headers: {
              'Access-Control-Request-Headers': 'authorization'
            }
          }).then(function (results) {
            return results.json();
          })["catch"](function (err) {
            return console.log(err, err.status, err.message);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

var createCard = function createCard(reading) {
  var articleImage = document.createElement('img').setAttribute('class', 'thumbnail');
  var articleLink = document.createElement('a').setAttribute('class', 'btn btn-link');
  var articleLinkText = document.createTextNode('Link to article');
  document.getElementById('breads').appendChild(document.createElement('li').appendChild(document.createElement('main').setAttribute('class', 'container').appendChild(document.createElement('section').setAttribute('class', 'row justify-content-center mt-3').appendChild(document.createElement('div').setAttribute('class', 'col-12').appendChild(document.createElement('div').setAttribute('class', 'card shadow-lg').appendChild(document.createElement('div').setAttribute('class', 'card-body').appendChild(document.createElement('h2').setAttribute('class', 'card-title').appendChild(reading.title), articleImage.setAttribute('src', reading.reading_image), document.createElement('p').setAttribute('class', 'card-text text').appendChild(reading.description), document.createElement('p').setAttribute('class', 'card-text text-muted').appendChild(reading.created_at), document.createElement('div').setAttribute('class', 'd-flex justify-content-end').appendChild(articleLink.setAttribute('href', reading.url).appendChild(articleLinkText)))))))));
};

var displayReadings = function displayReadings() {
  var readings, latestFiveReadings, readingCards;
  return regeneratorRuntime.async(function displayReadings$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchReadings());

        case 2:
          readings = _context2.sent;
          latestFiveReadings = readings.slice(0, 4);
          readingCards = latestFiveReadings.map(function (reading) {
            return createCard(reading);
          });
          return _context2.abrupt("return", readingCards);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // window.addEventListener('DOMContentLoaded', displayReadings);