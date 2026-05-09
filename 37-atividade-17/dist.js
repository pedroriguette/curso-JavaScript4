"use strict";

var dayjs = require("dayjs");
var calculateDay = function calculateDay(bithday) {
  var dateNow = dayjs();
  var bithdayFormat = dayjs(bithday);
  var diferenceForYear = dateNow.diff(bithdayFormat, "year");
  var nextBithday = dayjs(bithdayFormat).add(diferenceForYear + 1, 'year');
  return console.log("\n        Voc\xEA nasceu no dia ".concat(bithdayFormat.format('DD/MM/YYYY'), "\n        A sua idade \xE9 ").concat(diferenceForYear, " anos\n        e seu proximo aniversario \xE9 em ").concat(nextBithday.format('DD/MM/YYYY'), "\n        faltando ").concat(nextBithday.diff(dateNow, 'day') + 1, " dias\n        "));
};
alert(calculateDay('2005-03-06'));
