"use strict";

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

window.addEventListener('DOMContentLoaded', function _callee() {
  var readings, latestFiveReadings, breadsHtml;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetchReadings());

        case 2:
          readings = _context2.sent;
          latestFiveReadings = readings.slice(0, 5);
          breadsHtml = latestFiveReadings.map(function (reading) {
            return "\n                <main class=\"container\">\n                    <section class=\"row justify-content-center mt-3\">\n                        <div class=\"col-12\">\n                            <div id=\"breads-cards\" class=\"card shadow-lg\">\n                                <div id=\"breads-cards\" class=\"card-body\">\n                                    <h2 id=\"breads-cards\" class=\"card-title\">".concat(reading.title, "</h2>\n                                    <h3 id=\"breads-cards\" class=\"card-subtitle mb-2 text-muted\">\n                                        Timestamp: ").concat((0, _moment["default"])(reading.created_at), "\n                                    </h3>\n                                    <img\n                                        src=").concat(reading.reading_image, "\n                                        alt=\"Article img\"\n                                        class=\"thumbnail\"\n                                    />\n                                    <p id=\"breads-cards\" class=\"card-text\">\n                                        ").concat(reading.description.substring(0, 300), "...\n                                    </p>\n                                    <div id=\"breads-cards\" class=\"d-flex justify-content-end\">\n                                        <a\n                                            id=\"breads-cards\"\n                                            href=").concat(reading.url, "\n                                            class=\"btn btn-link\"\n                                        >\n                                            Link to full article\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </section>\n                </main>\n            ");
          }).join('');
          document.getElementById('breads').innerHTML = breadsHtml;

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
});