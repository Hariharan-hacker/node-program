var x = 0, y = 0, z=0 
function displayValues(){
    console.log("X=%d;, Y=%d, Z=%d", x, y, z);
}

function updateX(){
    x = x+1;
    console.log('inside updateX');
}

function updateY(){
    y = y+1;
    console.log('inside setImmediate()');
}

function updateZ(){
    z = z+1;
    displayValues();
}

setInterval(updateX, 1000);

// setInterval(updateY, 2000); // set immediate method is called here.
setImmediate(updateY); // This method is immediately called before timeout or interval events.

setInterval(updateZ, 3000);


