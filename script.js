

$('#name').on('keyup', function(){
    $('#output').html($(this).val());
});

$('#other').on('keyup', function(){
    $('#core').html($(this).val());
});

$("#add").click(function(){

    var added = $("#core").text();
    $("#output").append(" " + added);

    console.log(added);
    
})


function copyToClipboard(element) {
    //Prepend name value
    // var name = printName =>
    // $("#output").prepend($("#name"));
    //$("#output").append(name);
    var $temp = $("<input>");
    $("#output").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}


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

    // Function for PHJ

    //Input to type name

    //Click relationship

    //Click button for each set of words with comma at the end

    $("#rep").click(function() {

        var rmdValue = $("#rep").val();
        
        $("#output").append(rmdValue);
        
    })

    $("#ra").click(function() {

        var rmdValue = $("#ra").val();
        
        $("#output").append(rmdValue);
        
    })

    $("#po").click(function() {

        var rmdValue = $("#po").val();
        
        $("#output").append(rmdValue);
        
    })

    $("#sa").click(function() {

        var rmdValue = $("#sa").val();
        
        $("#output").append(rmdValue);
        
    })

    $("#toc").click(function() {

        var rmdValue = $("#toc").val();
        
        $("#output").append(rmdValue);
        
    })
    
    
    
    $("#rmd").click(function() {

        var rmdValue = $("#rmd").val();
        
        $("#output").append(rmdValue);
        
    })

    $("#ben").click(function() {

        var benValue = $("#ben").val();
        $("#output").append(benValue);

    })

    $("#xfer").click(function() {

        var xferValue = $("#xfer").val();
        $("#output").append(xferValue);

    })

    $("#sur").click(function() {

        var surValue= $("#sur").val();
        $("#output").append(surValue);

    })



    //When clicked, append each item to output - realtime so shows output as clicked

    //When "copy" is clicked, output copied

    
    
    
   






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

   









