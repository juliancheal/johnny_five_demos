var five = require("johnny-five");
var Spark = require("spark-io");

var board = new five.Board({
    io: new Spark({
        token: "token",
        deviceId: "device"
    })
});

board.on("ready", function() {
  var leds = [];
  for (var i = 0; i < 5; i++) {
      var pin = "D" + i;
      leds.push(pin);
  }
  var array = new five.Led.Array(leds);
  array.on();
});