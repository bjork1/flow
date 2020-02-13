$(document).ready(function() {




    $("#interest").click(function() {

        var getOne = parseInt($("#numone").val(),10);
        //console.log(getOne);
        var getTwo = parseInt($("#numtwo").val(),10);
        var years = parseInt($("#years").val(),10);
        var answer = ((((( getTwo - getOne ) / getOne)/ years)*100).toFixed(2)) + "%";
        //$()

        $("#result").html(answer)
    });

    $("#thisButton").click(function() {

        var getNum = $("#number").val();
        var nowNum = parseInt(getNum);
       // console.log(nowNum);

        var value = $("#todayTwo").attr('value');
       // console.log(value);
        var isNumber = parseInt(value);
        //console.log(isNumber + 2);

        hello = "";
    
        
        hello += (nowNum - isNumber);
    
        console.log(hello);

        $("#result").html(hello);





    })

       

    });

   









