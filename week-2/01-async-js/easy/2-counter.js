function counter(){
    
    setTimeout(function(){
        count++;
        counter();
        console.log(count);
    }, 1000);

}
var count = 0;
counter();
