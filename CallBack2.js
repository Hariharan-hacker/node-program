var fs = require('fs');
var cars = ["Ferrari", "Porsche", "Bugatti"];

 function logCar(logMsg, callback){
    process.nextTick(function(){
        callback(logMsg);
    });
 }
 for(var idx in cars){
    var message = "Saw a " + cars[idx];
    console.log(cars[idx]);
    logCar(message, function(){
        console.log("Normal callback: " + message);
    });
 }

 for(var idx in cars){
    var message = "Saw a " + cars[idx];
    console.log(cars[idx]);
    (function(msg){
        logCar(msg, function(){
            console.log("Closure callback: " + msg);
        });
    })(message);    
 }