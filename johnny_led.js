var five = require("johnny-five");

five.Board().on("ready", function() {
  var johnny_led = new five.Led.RGB([ 7, 8, 9 ]);
  
  johnny_led.color("#f06");
  
});
