function simpleTimeout(consoleTimer){
    console.timeEnd(consoleTimer);
//	return;
}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");

console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

console.time("50milliSecond");
setTimeout(simpleTimeout, 50, "50milliSecond");

