var navlinks=$(".collapse")
$(".close").click(function (e) { 
    navlinks.toggleClass("hidden");
    $(".l1").toggleClass("line-1");
    $(".l2").toggleClass("line-2");
    $(".l3").toggleClass("line-3");
});

var currentDate=new Date();
var fundSource=$(".dropdown p");
var fundDropDown=$(".dropdown");
var source=$(".source");
var src=$(".src");
var selectdate=$("#payback");

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
    var amount=parseInt(amt.val())
    if(isNaN(amount)){
        $(".alert").removeClass("hidden");
    }
    else{
    gain=(days/365)*interest*amount;
    $(".output").removeClass("hidden");
    $(".output").addClass("animate__animated");
    $("#interest1").text(gain.toFixed(3));
    $("#amount1").text(amount);
    $("#invest").text(amount);}
});

$("#cancel").click(function(e){
    $(".output").addClass("hidden");
})

$("#amount").click(function(e){
    $(".alert").addClass("hidden");
})