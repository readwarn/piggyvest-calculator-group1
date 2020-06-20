var navlinks=$(".collapse")
$(".close").click(function (e) { 
    navlinks.toggleClass("hidden");
    $(".l1").toggleClass("line-1");
    $(".l2").toggleClass("line-2");
    $(".l3").toggleClass("line-3");
});

function formatDate(date){    //format date
	day = date.getDate(),
    month = date.getMonth()+1, 
	year = date.getFullYear();
	if(day<10){
		day='0'+day
       	} 
     if(month<10){
	month='0'+month
          }
	  var formattedDate = year+'-'+month+'-'+day;
	  return formattedDate;
        }

var currentDate=new Date();
var fundSource=$(".dropdown p");
var fundDropDown=$(".dropdown");
var source=$(".source");
var src=$(".src");
var selectdate=$("#payback");
var lockDate=$("#date1");

selectdate.attr("min",formatDate(currentDate));

source.click(function(e){
fundDropDown.removeClass("hidden");
$(this).addClass("bd");
})

fundSource.click(function(e){
   fundDropDown.addClass("hidden");
   var s=$(this).text();
   src.val(s);
})

$(".interest").click(function(e){
    var amt=$("#amount");
    var pickedDate = new Date($('#payback').val());
    var elapsedDays=pickedDate - currentDate;
    var res = Math.abs(elapsedDays) / 1000;
    var days = Math.floor(res / 86400);
    var interest;
    var gain;
    if(days<30){
        interest=0.06;
    }
    else if(days<60){
         interest=0.08;
    }
    else if(days<90){
        interest=0.1;
    }
    else if(days<730){
        interest=0.13;
    }
    else{
        interest=0.35;
    }
    var amount=parseInt(amt.val());
    if(isNaN(amount)){
        $("#error").text("Input a valid amount");
    }
    else{
        gain=(days/365)*interest*amount;
        $("#interest1").text(gain.toFixed(2));
        $("#amount1").text(amount);
        $("#date1").text(formatDate(pickedDate));
        $(".feedback").removeClass("hide");
        $(".feedback").addClass("show");
    }
});

$("#cancel").click(function(e){
    $(".feedback").removeClass("show");
    $(".feedback").addClass("hide");
})

$("#safelock").click(function(e){
    $(".feedback").removeClass("show");
    $(".feedback").addClass("hide");
    $(".thanks").removeClass("hide");
    $(".thanks").addClass("show");
})
$(".done").click(function(e){
    $(".thanks").removeClass("show");
    $(".thanks").addClass("hide");
});

$("#amount").click(function(e){
    $("#error").text("");
})