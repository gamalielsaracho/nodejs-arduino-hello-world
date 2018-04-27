var Board = require('johnny-five').Board
var Led = require('johnny-five').Led

var myLed, myBoard;

myBoard = new Board()

myBoard.on('ready', function() {
	myLed = new Led(13)

	myLed.strobe(2000)

	this.repl.inject({
		ledStructure: myLed
	})
})

myBoard.on('error', function (err) {
	// body...
	console.log(err)
})