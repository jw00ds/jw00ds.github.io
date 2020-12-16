"use strict";

function fetchReadings() {
  var response, responseBody;
  return regeneratorRuntime.async(function fetchReadings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://breads-server.herokuapp.com/api/readings/21', {
            method: 'GET',
            headers: {
              'Access-Control-Request-Headers': 'authorization'
            }
          }));

        case 3:
          response = _context.sent;
          console.log(response);
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          responseBody = _context.sent;
          console.log(responseBody);
          return _context.abrupt("return", responseBody);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0, _context.t0.message);

        case 15:
          ;

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
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
          console.log(readings);
          latestFiveReadings = readings.slice(0, 4);
          readingCards = latestFiveReadings.map(function (reading) {
            return createCard(reading);
          });
          return _context2.abrupt("return", readingCards);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

window.addEventListener('DOMContentLoaded', displayReadings);