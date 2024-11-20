var fs = require('fs');
fs.stat("nexttick1.js", function(){
    console.log("nexttick1.js Exists");
});

setInterval(function(){
    console.log('hi hello');
}, 50);
	
setImmediate(function(){
    console.log('Immediate timer 1 executed');
});
setImmediate(function(){
    console.log('Immediate timer 2 executed');
});


