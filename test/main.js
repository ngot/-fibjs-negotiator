var test = require("test");
var coroutine = require('coroutine');
var process = require('process');

test.setup();

run("./charset.js");
run("./encoding.js");
run("./language.js");
run("./mediaType.js");

coroutine.start(function () {
  process.exit(-test.run());
}).join();
