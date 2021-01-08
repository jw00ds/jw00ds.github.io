"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventListener = void 0;

// import moment from 'moment';
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

var eventListener = function eventListener() {
  return window.addEventListener('DOMContentLoaded', function _callee() {
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
              var d = new Date(reading.created_at);
              var yr = new Intl.DateTimeFormat('en', {
                year: 'numeric'
              }).format(d);
              var mo = new Intl.DateTimeFormat('en', {
                month: 'short'
              }).format(d);
              var day = new Intl.DateTimeFormat('en', {
                day: '2-digit'
              }).format(d);
              return "\n                <main class=\"container\">\n                    <section class=\"row justify-content-center mt-3\">\n                        <div class=\"col-12\">\n                            <div id=\"breads-cards\" class=\"card shadow-lg\">\n                                <div id=\"breads-cards\" class=\"card-body\">\n                                    <h2 id=\"breads-cards\" class=\"card-title\">".concat(reading.title, "</h2>\n                                    <h3 id=\"breads-cards\" class=\"card-subtitle mb-2 text-muted\">\n                                        Timestamp: ").concat(day, "-").concat(mo, "-").concat(yr, "\n                                    </h3>\n                                    <img\n                                        src=").concat(reading.reading_image, "\n                                        alt=\"Article img\"\n                                        class=\"thumbnail\"\n                                    />\n                                    <p id=\"breads-cards\" class=\"card-text\">\n                                        ").concat(reading.description.substring(0, 300), "...\n                                    </p>\n                                    <div id=\"breads-cards\" class=\"d-flex justify-content-end\">\n                                        <a\n                                            id=\"breads-cards\"\n                                            href=").concat(reading.url, "\n                                            class=\"btn btn-link\"\n                                        >\n                                            Link to full article\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </section>\n                </main>\n            ");
            }).join('');
            document.getElementById('breads').innerHTML = breadsHtml;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  })();
};

exports.eventListener = eventListener;