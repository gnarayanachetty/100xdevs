function counter(){
    var date = new Date().getTime();
    setInterval(function(){
        // count++;
        
        console.log(new Date().toLocaleTimeString('en-US'));
    }, 1000);
}
counter();