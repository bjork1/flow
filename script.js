var $titleInput = $("#name");

var $willWork = $("#nameTwo");

var $otherVal = $("#other");


//Select the preview h1 tag
var $previewTitle = $("#output");






var $rmdTestVal = $("#rmdTest");

// Every second update the preview
var previewTimer = setInterval(updatePreview, 1000);

function updatePreview(){  
  //Get the user's input

  
  var titleValue = $titleInput.val();
  //var nextValue = $willWork.val();
  var thirdVal = $otherVal.val();
  //var tryValue = $rmdValue.val();
  //var tryVal = $rmdTestVal.val();


  $previewTitle.text(titleValue + thirdVal);

    
}


  
    
    //$("#output").append(rmdValue);


    //Set the user input as the preview title. 


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




/*

$("#output").append($("input").map(function() {
    return $(this).val();
})
.get()
.join(", "));
*/

/*
$('#name').keyup(function(){

pleaseWork = $(this).val();
$('#nameTest').html(pleaseWork);
//$(this).val();

//$('#nameTest').html(global);


$('#output').html($('#nameTest').text());

});
*/


//console.log(pleaseWork);

/*

$('#nameTwo').on('keyup', function(){
    $('#nameTest2').html($(this).val());

    $('#output').html($('#nameTest2').text());
   
});



$('#other').on('keyup', function(){
    $('#core').html($(this).val());

    $('#output').html($('#core').text());
});

$("#add").click(function(){

    var added = $("#core").text();
    $("#output").append(" " + added);

    console.log(added);
    
});









    //Prepend name value
    // var name = printName =>
    // $("#output").prepend($("#name"));
    //$("#output").append(name);
    
    $("#output").html($("#name").text());








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

/*
$("#copyThis").keypress(function(e) {
    if(e.which == 13){
        $(".button").click()
    };
});

*/



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

   









