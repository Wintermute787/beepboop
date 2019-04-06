$(function () {

    function beepBoop(int){
        var strArr = [];
        var num = '';
        var word1 = "beep";
        var word2 = "boop";
        var word3 = "I'm Sorry Dave, I can't do that."
        while(int > strArr.length){
            for(var i = 0; i <=int; i++){
                strArr.push("" + i);
            }
        }
        for(var k = 0; k < strArr.length; k++){
            num = strArr[k];
            if(num.includes("3")){
                strArr[k] = word3;
            }else if(num.includes("2")){
                strArr[k] = word2;
            }else if(num.includes("1")){
                strArr[k] = word1;
            }
        }
        return strArr;
    }                           



    // var strArr = [];

    // function numToStr(int) {
    //     for (var i = 0; i <= int; i++) {
    //         strArr.push("" + i);

    //     }
    //     return strArr;
    // }

    // function beepBoop(int) {
    //     num = '';
    //     var word1 = "beep";
    //     var word2 = "boop";
    //     var word3 = "I'm Sorry Dave, I can not do that";

    //     for (var i = 0; i < strArr.length; i++) {
    //         num = strArr[i];
    //         if (num.includes("3")) {
    //             strArr[i] = word3;
    //         } else if (num.includes('2')) {
    //             strArr[i] = word2;
    //         } else if (num.includes('1')) {
    //             strArr[i] = word1;
    //         }
    //     }
    //     return strArr;
    // }






    $('#boop-form').submit(function (event) {
        event.preventDefault();
        var number = parseInt($('input#boop').val());

        // strArr = [];
        // numToStr(number);
        // beepBoop(number);
        $("#boop-text").text(beepBoop(number));

        $('.output-text').show('slow');
    });
});