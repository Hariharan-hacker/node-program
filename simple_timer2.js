function simpleTimeout(consoleTimer){
    console.timeEnd(consoleTimer);
//	return;
}

console.log('hi1');
console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");

console.log('hi2');
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.log('hi3');
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

console.log('hi4');
console.time("50milliSecond");
setTimeout(simpleTimeout, 50, "50milliSecond");

