function simpleTimeout(consoleTimer){
    console.log(consoleTimer);
//	return;
}

console.log('hi1');
//console.time("twoSecond");
setInterval(simpleTimeout, 2000, "twoSecond");
/* This is an example of a callback function, making another asynchronous call to the timer API
   Hence, when the first 2000ms expire and the callback fuction simpleTimeout() is called and processed,
   setInterval() will make another asynchronous request to the timer and it will put another entry in the
   event queue.
   This process continues.
*/
console.log('hi2');
//console.time("oneSecond");
setInterval(simpleTimeout, 1500, "oneSecond");

console.log('hi3');
//console.time("fiveSecond");
setInterval(simpleTimeout, 4000, "fiveSecond");

console.log('hi4');
//console.time("50milliSecond");
setInterval(simpleTimeout, 5000, "50milliSecond");

