

for(var x = 0; x < 10; x++) {
    console.log(x);
    setTimeout(function() {
        console.log('The number is'  + x);
    }, 5000);
}