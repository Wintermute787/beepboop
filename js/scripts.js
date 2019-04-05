$(function(){

   function numberRange(int){
       var numArr = [];
       numArr.push(i);
        for(var i = 0; i <= int; i ++){
           
         console.log(numArr);
        }
   }

    numberRange(34);

    $('#boop-form').submit(function(event){
        event.preventDefault();
        var number = $('input#boop').val();
        console.log(number);

        
    });
});