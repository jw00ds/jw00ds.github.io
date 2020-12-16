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
          console.log(response);
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
  var mainWithAttr = main.setAttribute('class', 'container');
  var sectionWithAttr = section.setAttribute('class', 'row justify-content-center mt-3');
  var div1WithAttr = div1.setAttribute('class', 'col-12');
  var div2WithAttr = div2.setAttribute('class', 'card shadow-lg');
  var div3WithAttr = div3.setAttribute('class', 'card-body');
  var h2WithAttr = h2.setAttribute('class', 'card-title');
  var imageWithAttr1 = image.setAttribute('class', 'thumbnail');
  var imageWithAttr2 = imageWithAttr1.setAttribute('src', reading.reading_image);
  var p1WithAttr = p1.setAttribute('class', 'card-text text');
  var p2WithAttr = p2.setAttribute('class', 'card-text text-muted');
  var div4WithAttr = div4.setAttribute('class', 'd-flex justify-content-end');
  var linkWithAttr1 = link.setAttribute('class', 'btn btn-link');
  var linkWithAttr2 = linkWithAttr1.setAttribute('href', reading.url);
  var finishedLink = linkWithAttr2.appendChild(linkText);
  var finishedDiv4 = div4WithAttr.appendChild(finishedLink);
  var finishedP2 = p2WithAttr.appendChild(reading.created_at);
  var finishedP1 = p1WithAttr.appendChild(reading.description);
  var finishedH2 = h2WithAttr.appendChild(reading.title);
  var finishedDiv3 = div3WithAttr.appendChild(finishedH2, imageWithAttr2, finishedP1, finishedP2, finishedDiv4);
  var finishedDiv2 = div2WithAttr.appendChild(finishedDiv3);
  var finishedDiv1 = div1WithAttr.appendChild(finishedDiv2);
  var finishedSection = sectionWithAttr.appendChild(finishedDiv1);
  var finishedMain = mainWithAttr.appendChild(finishedSection);
  var finishedListItem = listItem.appendChild(finishedMain);
  var finishedReceiverContainer = receiverContainer.appendChild(finishedListItem);
  return finishedReceiverContainer;
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