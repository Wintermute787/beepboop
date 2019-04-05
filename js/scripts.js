$(function () {

    //I thought changing the int into an array of numbers would be helpful here, didn't end up using it//
    function numberRange(int) {
        var numArr = [];
        for (var i = 0; i <= int; i++) {
            numArr.push(i);
        }
        return (numArr);
    }

    


    //take user input through function//

    function beepBoop(int) {
        //create empty array//
        var numArr = [];
        //create words to push into array///
        var word1 = "Beep";
        var word2 = "Boop";
        var word3 = "I'm Sorry Dave, I'm afraid I can't do that.";
        //run through loop with the index from int//
        for (var i = 0; i <= int; i++) {
            //convert numArr to string. (this took me FOREVER to figure out)//
            str = numArr.toString();
            //continue pushing words into the string based on conditionals//
            if (i % 3 === 0) {
                numArr.push(word3);
            } else if (str.includes("1")) {
                numArr.push(word1);
            } else if (str.includes("2")) {
                numArr.push(word2);
            } else {
                numArr.push(i.toString());
            }
        }
        //return the final numArr string//
        return numArr;
    }

    


    $('#boop-form').submit(function (event) {
        event.preventDefault();
        var number = parseInt($('input#boop').val());
        
        $("#boop-text").text("<li>" + beepBoop(number) + "</li>");


    });
});