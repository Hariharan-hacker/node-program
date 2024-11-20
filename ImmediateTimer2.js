var x = 0, y = 0, z=0 
function displayValues(){
    console.log("X=%d;, Y=%d, Z=%d", x, y, z);
}

function updateX(){
    x = x+1;
    console.log('inside updateX');
}

function updateY(){
    y = y+10;
    console.log('inside setImmediate()');
}

function updateZ(){
    z = z+1;
    displayValues();
}

setInterval(updateX, 1000);

setInterval(updateZ, 3000);

// setInterval(updateY, 2000); // set immediate method is called here.
setImmediate(updateZ); // set immediate method is called here - it is 2000 milliseconds delays
setImmediate(updateY); // set immediate method is called here - it is 2000 milliseconds delay
setImmediate(updateZ); // set immediate method is called here - it is 2000 milliseconds delay


