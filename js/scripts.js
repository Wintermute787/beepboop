$(function(){

    function beepBoop(){
        
        for(var i =0; i < 100; i++){
            if(i ===1 ){
                console.log("beep");
            }else if(i % 2 ===0){
               console.log("boop");
            }else if(i % 3 ===0){
                console.log("I'm sorry Dave, I'm afraid I can't do that");
            }else {
                console.log(i);
            }
        }
    }

    beepBoop();


    $('#boop-form').submit(function(event){
        event.preventDefault();

        
    });
});