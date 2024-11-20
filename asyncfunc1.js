/* It is from Internet. couldn't get thhe output of resolveafter25seconds() function */
function resolveafter25seconds(){
    return new Promise((resove)=> {

        setTimeout(()=>{
            resolveafter25seconds('resolved');
        },2000);
        const result = 20;
    });
}

async function asyncCall(){
    console.log('calling');
    const result = await resolveafter25seconds();
    console.log(result);
    console.log("Expected output before timeout");
}

asyncCall();
console.log("hello");