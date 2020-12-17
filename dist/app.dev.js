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
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          responseBody = _context.sent;
          return _context.abrupt("return", responseBody);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0, _context.t0.message);

        case 13:
          ;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

var createCard = function createCard(reading) {
  var linkText = document.createTextNode('Link to article');
  var receiverContainer = document.getElementById('breads');
  var listItem = document.createElement('li');
  var main = document.createElement('main');
  var section = document.createElement('section');
  var div1 = document.createElement('div');
  var div2 = document.createElement('div');
  var div3 = document.createElement('div');
  var h2 = document.createElement('h2');
  var image = document.createElement('img');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');
  var div4 = document.createElement('div');
  var link = document.createElement('a');
  main.setAttribute('class', 'container');
  section.setAttribute('class', 'row justify-content-center mt-3');
  div1.setAttribute('class', 'col-12');
  div2.setAttribute('class', 'card shadow-lg');
  div3.setAttribute('class', 'card-body');
  h2.setAttribute('class', 'card-title');
  image.setAttribute('class', 'thumbnail');
  image.setAttribute('src', reading.reading_image);
  p1.setAttribute('class', 'card-text text');
  p2.setAttribute('class', 'card-text text-muted');
  div4.setAttribute('class', 'd-flex justify-content-end');
  link.setAttribute('class', 'btn btn-link');
  link.setAttribute('href', reading.url);
  link.appendChild(linkText);
  div4.appendChild(link);
  p2.appendChild(reading.created_at);
  p1.appendChild(reading.description);
  h2.appendChild(reading.title);
  div3.appendChild(h2, image, p1, p2, div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  section.appendChild(div1);
  main.appendChild(section);
  listItem.appendChild(main);
  receiverContainer.appendChild(listItem);
  return receiverContainer;
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
};

window.addEventListener('DOMContentLoaded', displayReadings);