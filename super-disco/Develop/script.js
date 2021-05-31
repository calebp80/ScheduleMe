var todayDate = moment().format('dddd, MMM Do YYYY LT');
$("#currentDay").html(todayDate);

$(function () {
    $(".saveButton").on("click", function () {
        
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

        
    localStorage.setItem(time, text);
    })
   
 function timeTracker() {
        
var timeNow = moment().hour();

$(".time-block").each(function () {
var blockTime = parseInt($(this).attr("id").split("hour")[1]);
           
 if (blockTime < timeNow) {
    $(this).addClass("past");
     $(this).removeClass("present");
    $(this).removeClass("future");
                
                
            }
else if (blockTime === timeNow) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
                
        }
 else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");

            }
        })
    }

    
    
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));

    timeTracker();
})