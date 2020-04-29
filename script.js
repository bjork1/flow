console.log("Hello There!");
var $titleInput = $("#name");
var $relationship = $("#relationship");
var $otherVal = $("#other");
var $testThis = $("#heyhey");
var $previewTitle = $("#output");
var previewTimer = setInterval(updatePreview, 1000);
var taskDisplay = $("#printArray");
var $thisValue = $("#helloValue");

var count = 0;
var i;
var taskArray = [];

function copyTaskValue(element) {
  var $temp = $("<input>");
  $($thisValue).append($temp);
  $temp.val($(element).text()).select();

  document.execCommand("copy");
}

$("#hello").click(function () {
  var contractNum = $("#contractnum").val();
  var nameVal = $("#name").val() + ", " + $("#relationship").val();
  var infoVal = $("#other").val();

  var checkBox = $("#customCheck1").prop("checked");
  var checkBoxTwo = $("#customCheck2").prop("checked");
  var checkBoxThree = $("#customCheck3").prop("checked");
  check();
  checkEmail();
  checkEform();

  function check() {
    if (checkBox == true) {
      return (
        `<i class="fab fa-product-hunt phj-btn fa-lg wide" value = ` +
        contractNum +
        `></i>`
      );
    } else {
      return "";
    }
  }
  function checkEmail() {
    if (checkBoxTwo == true) {
      return (
        `<i class="fas fa-envelope-square em-btn fa-lg wide" value = ` +
        contractNum +
        `></i>`
      );
    } else {
      return "";
    }
  }

  function checkEform() {
    if (checkBoxThree == true) {
      return (
        `<i class="fas fa-file-import ef-btn fa-lg wide" value = ` +
        contractNum +
        `></i>`
      );
    } else {
      return "";
    }
  }
  appendFile();

  function appendFile() {
    taskDisplay.append(
      `
  
  <a class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">` +
        contractNum +
        ` (` +
        nameVal +
        `)
        </h6>
                    <small class="text-muted">                   <i class="fas fa-clipboard-check del-btn fa-3x" value = ` +
        contractNum +
        `></i>
                    </small>
                  </div><p class="mb-1 text">
                  ` +
        infoVal +
        `
                </p>
                   <p class="mb-1">
                     ` +
        check() +
        checkEmail() +
        checkEform() +
        `
                   </p>
                  


                </a>
  
  
  `
    );
  }

  taskDisplay.on("click", ".phj-btn", function () {
    taskArray.splice(taskArray.indexOf($(this).val()), 1);
    $(this).remove();
  });

  taskDisplay.on("click", ".ef-btn", function () {
    taskArray.splice(taskArray.indexOf($(this).val()), 1);
    $(this).remove();
  });

  taskDisplay.on("click", ".em-btn", function () {
    taskArray.splice(taskArray.indexOf($(this).val()), 1);
    $(this).remove();
  });

  $("#add").val("");
});

taskDisplay.on("click", ".del-btn", function () {
  taskArray.splice(taskArray.indexOf($(this).val()), 1);
  $(this).parent().parent().parent().remove();
});

function updatePreview() {
  var titleValue = $titleInput.val() + " ";
  var relationVal = "- " + $relationship.val() + " - ";
  var thirdVal = $otherVal.val();

  $previewTitle.text(titleValue + relationVal + thirdVal);
}

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

$(document).ready(function () {
  $("#interest").click(function () {
    var getOne = parseInt($("#numone").val(), 10);
    var getTwo = parseInt($("#numtwo").val(), 10);
    var years = parseInt($("#years").val(), 10);
    var answer = (((getTwo - getOne) / getOne / years) * 100).toFixed(2) + "%";

    $("#result").html(answer);
  });

  $("#thisButton").click(function () {
    var getNum = $("#number").val();
    var nowNum = parseInt(getNum);

    var value = $("#todayTwo").attr("value");
    var isNumber = parseInt(value);

    hello = "";

    hello += nowNum - isNumber;

    console.log(hello);

    $("#result").html(hello);
  });
});
