"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var express = require('express');

var fetch = require('node-fetch');

require('dotenv').config();

var CronJob = require('cron').CronJob;

var app = express();
var PORT = process.env.PORT || 3000;
var DISCORD_URL = process.env.DISCORD_URL || null;
var MEET_URL = process.env.MEET_URL; // app.get(lastMeet, (res, req) => {
//     console.log(res)
// })

var Discord = function Discord() {
  console.log("You will see this message every 30 seconds " + new Date());
};

var jsonMeet = fetch(MEET_URL).then(function (res) {
  return res.json();
}).then(console.log(jsonMeet)).then(function (json) {
  return console.log("Udalo sie niedziała a teraz");
});

var request = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(MEET_URL).then(response.json());

          case 2:
            response = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request() {
    return _ref.apply(this, arguments);
  };
}(); // request();


var coSekunde = new CronJob('*/2 * * * * *', Discord); // coSekunde.start();

app.listen(PORT, function () {
  console.log("App listens on port ".concat(PORT));
});