$(function () {

   var strArr = [];

   function numToStr(int){
       for(var i =0; i <= int; i++){
           strArr.push("" + i);
           
       }
       return strArr;
   }

   function beepBoop(int){
       num = '';
       var word1 = "beep";
       var word2 = "boop";
       var word3 = "I'm Sorry Dave, I can not do that";

       for(var i = 0; i < strArr.length; i++){
           num = strArr[i];
           if(num.includes("3")){
               strArr[i] = word3;
           }else if(num.includes('2')){
               strArr[i] = word2;
           }else if(num.includes('1')){
               strArr[i] = word1;
           }
       }
       return strArr;
   }

   

    
    

    $('#boop-form').submit(function (event) {
        event.preventDefault();
        var number = parseInt($('input#boop').val());

        strArr =[];
        numToStr(number);
        beepBoop(number);
        $("#boop-text").text(beepBoop(number));

        $('.boop').show('slow');
    });
});