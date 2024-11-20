var fs = require('fs');
fs.stat("nexttick1.js", function(){
    console.log("nexttick1.js Exists");
});

setImmediate(function(){
    console.log('Immediate timer 1 executed');
});
setImmediate(function(){
    console.log('Immediate timer 2 executed');
});

process.nextTick(function(){
    console.log("Next Tick 1 executed");
});

process.nextTick(function(){
    console.log("Next tick 2 executed");
});

setInterval(function(){
    console.log('hi hello');
}, 500);
