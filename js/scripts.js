$(function () {

    function numberRange(int) {
        var numArr = [];
        for (var i = 0; i <= int; i++) {
            numArr.push(i);
        }
        return (numArr);
    }

    console.log(numberRange(34));

  


   function beepBoop(int){
       var newNum = numberRange(int);
       for(var i = 0; i < newNum.length; i++){
           if(newNum[i] % 2 ===0){
               console.log("beep");
           }else if(newNum[i] % 3 ===0) {
               console.log("I'm sorry")
           }
           
       }
   }
    beepBoop(33);


    $('#boop-form').submit(function (event) {
        event.preventDefault();
        var number = $('input#boop').val();
        console.log(number);


    });
});