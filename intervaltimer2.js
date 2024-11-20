var x = 0, y = 0, z=0 
function displayValues(){
    console.log("X=%d;, Y=%d, Z=%d", x, y, z);
}

function updateX(){
    x = x+1;
    //console.log('inside updateX');
}

function updateY(){
    y = y+1;
    //console.log('inside updateY');
}

function updateZ(){
    z = z+1;
    displayValues();
}

setInterval(updateX, 1000);

setInterval(updateY, 2000);

setInterval(updateZ, 3000);


