function simpleTimeout(consoleTimer){
    console.log(consoleTimer);
//	return;
}

//console.time("twoSecond");
setInterval(simpleTimeout, 2000, "twoSecond");

//console.time("oneSecond");
setInterval(simpleTimeout, 1500, "oneSecond");

//console.time("fiveSecond");
setInterval(simpleTimeout, 4000, "fiveSecond");

//console.time("50milliSecond");
setInterval(simpleTimeout, 5000, "50milliSecond");

