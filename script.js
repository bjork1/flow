//Section 1 Variables & Function
console.log("Hello There!");
var $titleInput = $("#name");
var $relationship = $("#relationship");
var $otherVal = $("#other");
var $testThis = $("#heyhey");
var $previewTitle = $("#output");
var previewTimer = setInterval(updatePreview, 1000);
var taskDisplay = $("#printArray");

// var testArray = [];
var count = 0;
var i;
var taskArray = [];

//var deleteThis = $("#delete").click(function() {});

$("#hello").click(function () {
  var contractNum = $("#contractnum").val();
  var nameVal = $("#name").val() + " - " + $("#relationship").val();
  var infoVal = $("#other").val() + ", " + $("#add").val();

  // var contractNum =
  //   $("#contractnum").val() +
  //   " - " +
  //   $("#name").val() +
  //   " - " +
  //   $("#relationship").val() +
  //   " - " +
  //   $("#other").val() +
  //   "</br>" +
  //   $("#add").val();

  // var nameArrayValue = $("#name").val();
  // var relationArrayValue = $("#relationship").val();
  // var outputArrayVal = $("#other").val();

  // taskArray.push(contractNum);
  // testArray.push(
  //   "Task: " +
  //     contractNum +
  //     " " +
  //     nameArrayValue +
  //     " " +
  //     relationArrayValue +
  //     " " +
  //     outputArrayVal +
  //     "<button value = '' id = 'removeTaskTest' type = 'button'>Remove Task</button></br>"
  // );

  // for (var i = 0; i < testArray.length; i++) {
  //   console.log(testArray);
  //   $("#printArray").append(testArray[i]);
  // }

  taskDisplay.append(
    `
    
    <div class = "card">
    <div class="card-body">
      <h5 class="card-title">` +
      contractNum +
      " - " +
      nameVal +
      `</h5>
      <p class="card-text">` +
      infoVal +
      `</p><button value = "` +
      contractNum +
      `" type = 'button' class = 'btn btn-outline-secondary del-btn'>Remove Task</button>

    </div>
    </div>
  
    
    `

    // "<li class = 'list-group-item'>" + contractNum + "<button value = '" +
    //   contractNum +
    //   "' type = 'button' class = 'btn btn-outline-secondary del-btn'>Remove Task</button></li>"
  );

  //   "<p>" +
  //     contractNum +
  //     '<button value = "' +
  //     contractNum +
  //     '" type = button" class = "btn btn-outline-secondary del-btn">Remove Task</button>'
  // );

  $("#add").val("");

  //$("#printArray").prepend("<button>Hello</button>");
  // console.log(testArray);

  // $("#removeTaskTest").click(function () {
  //   alert("You clicked this!");
  // });

  // $("#removeTaskTest").click(function () {
  //   testArray.shift();
  //   $("#printArray").html(testArray);
  // });
});

taskDisplay.on("click", ".del-btn", function () {
  // $("#five").remove();

  taskArray.splice(taskArray.indexOf($(this).val()), 1);
  $(this).parent().parent().remove();
});

// $("#removeTask").click(function () {
//   testArray.shift();
//   $("#printArray").html(testArray);
// });

function updatePreview() {
  $("#rep").click(function () {
    $("#repDiv").html($("#rep").val());
  });

  $("#ra").click(function () {
    $("#raDiv").html($("#ra").val());

    $("button").removeClass("active");
    $(this).addClass("active");
  });

  $("#po").click(function () {
    $("#buttonVal").html($("#po").val());
  });

  $("#unauth").click(function () {
    $("#unDiv").html($("#unauth").val());
  });

  $("#toc").click(function () {
    $("#tocDiv").html($("#toc").val());
  });

  $("#bene").click(function () {
    $("#beneDiv").html($("#bene").val());
  });

  var titleValue = $titleInput.val() + " ";
  var relationVal = "- " + $relationship.val() + " - ";
  var thirdVal = $otherVal.val();
  //var buttonVal = $("#buttonVal").text();
  //var repVal = $("#repDiv").text();
  //var raVal = $("#raDiv").text();
  //var poVal = $("#poDiv").text();
  //var unVal = $("#unDiv").text();
  //var tocVal = $("#tocDiv").text();
  //var beneVal = $("#beneDiv").text();

  $previewTitle.text(titleValue + relationVal + thirdVal);
}

//Section 2 Variables & Function

var $titleInputTwo = $("#nameTwo");
var $relationshipTwo = $("#relationshipTwo");
var $otherValTwo = $("#otherTwo");
var $testThisTwo = $("#heyheyTwo");
var $previewTitleTwo = $("#outputTwo");
var previewTimerTwo = setInterval(updatePreviewTwo, 1000);

function updatePreviewTwo() {
  var titleValueTwo = $titleInputTwo.val() + " ";
  var relationValTwo = "- " + $relationshipTwo.val() + " - ";
  var thirdValTwo = $otherValTwo.val();

  $previewTitleTwo.text(titleValueTwo + relationValTwo + thirdValTwo);
}

//Copy One

function copyToClipboard(element) {
  var $temp = $("<input>");
  $($previewTitle).append($temp);
  $temp.val($(element).text()).select();

  document.execCommand("copy");
  $temp.remove();
}

$("#clear").click(function () {
  console.log("Hello");

  $("#contractnum").val("");
  $("#name").val("");
  $("#relationship").val("");
  $("#other").val("");
});
//Copy Two

function copyToClipboardTwo(element) {
  var $tempTwo = $("<input>");
  $("#outputTwo").append($tempTwo);
  $tempTwo.val($(element).text()).select();
  document.execCommand("copy");
  $tempTwo.remove();
}

$("#clearTwo").click(function () {
  console.log("HelloTwo");

  $("#contractnumTwo").val("");
  $("#nameTwo").val("");
  $("#relationshipTwo").val("");
  $("#otherTwo").val("");
});

//Add function test

$("#add").click(function () {
  $("#appendHere").append(`<div class="container">
    <div class="row">
      <input
        type="text"
        class="name"
        placeholder="Contract Number"
        id="contractnum"
      />
    </div>

    <div class="row">
      <input
        type="text"
        class="name"
        id="name"
        placeholder="Names"
        value=""
      />

      <input
        type="text"
        class="name"
        id="relationship"
        placeholder="Relationship"
        value=""
      />
    </div>

    <div class="row">
      <input type="text" id="other" class="other" value="" />
    </div>

    <div class="row space">
      <div id="output" class="output"></div>

      <button
        class="btn btn-outline-secondary copyThis"
        type="button"
        onclick="copyToClipboard('#output')"
        id="copyThis"
      >
        Copy
      </button>

      <button
        class="btn btn-outline-secondary copyThis"
        type="button"
        id="clear"
      >
        Clear
      </button>
    </div>
    
    
    `);
});

//$("#output").append(rmdValue);

//Set the user input as the preview title.

/*
function returnValue(element) {


}
*/

//var $rmdValue = $("#testing");

// Every second update the preview
/*
$('#other').on('keyup', function(){
    $('#output').html($(this).val());

    console.log(($(this).val()))

    //$('#output').html($('#core').text());
});

*/

//Select the preview h1 tag

/*
    $("#search").keypress(function(e) {
        if(e.which == 13){
            $(".button").click()
        };
    });
    */

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

$(document).ready(function () {
  $("#interest").click(function () {
    var getOne = parseInt($("#numone").val(), 10);
    //console.log(getOne);
    var getTwo = parseInt($("#numtwo").val(), 10);
    var years = parseInt($("#years").val(), 10);
    var answer = (((getTwo - getOne) / getOne / years) * 100).toFixed(2) + "%";
    //$()

    $("#result").html(answer);
  });

  // Function for PHJ

  //Input to type name

  //Click relationship

  //Click button for each set of words with comma at the end

  $("#po").click(function () {
    var rmdValue = $("#po").val();

    $("#output").append(rmdValue);
  });

  $("#sa").click(function () {
    var rmdValue = $("#sa").val();

    $("#output").append(rmdValue);
  });

  $("#toc").click(function () {
    var rmdValue = $("#toc").val();

    $("#output").append(rmdValue);
  });

  $("#rmd").click(function () {
    var rmdValue = $("#rmd").val();

    $("#output").append(rmdValue);
  });

  $("#ben").click(function () {
    var benValue = $("#ben").val();
    $("#output").append(benValue);
  });

  $("#xfer").click(function () {
    var xferValue = $("#xfer").val();
    $("#output").append(xferValue);
  });

  $("#sur").click(function () {
    var surValue = $("#sur").val();
    $("#output").append(surValue);
  });

  //When clicked, append each item to output - realtime so shows output as clicked

  //When "copy" is clicked, output copied

  $("#thisButton").click(function () {
    var getNum = $("#number").val();
    var nowNum = parseInt(getNum);
    // console.log(nowNum);

    var value = $("#todayTwo").attr("value");
    // console.log(value);
    var isNumber = parseInt(value);
    //console.log(isNumber + 2);

    hello = "";

    hello += nowNum - isNumber;

    console.log(hello);

    $("#result").html(hello);
  });
});
