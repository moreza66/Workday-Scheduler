// we need a exact date
//  make a dive with 3boxes inside to create a specific time 
// we need a p tag to show the time 
// need an input or textarea for the users to type in to it
// save butomn
// when we click on save botomn, it has to get save on Local Storage
// change the background color depending on the houre 
// document.getElementById("currentDay").textContent = moment().format('dddd, MMMM Do YYYY')
// console.log(moment().format('dddd, MMMM Do YYYY'))


// TODAY DATE AND TIME in MOMENT FORMAT
  //Display current date and time (Moment.js)
let todayDateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = todayDateAndTime;

let now = moment();
now = now.startOf("hour");

// START OF DAY +9 TO START WORKDAY SCHEDULER AT 9AM
let startWorkTime = moment().startOf('day').add(9, "hours");
// tasks object to store in localStorage.
//Set Time For 9:00 A.M
let firstHour = startWorkTime.add(0, "h");
// TIME FORMAT
firstHour = firstHour.format('hh A');

$(".time-9-am").text(firstHour);

//Set Time For 10:00 A.M
let secondHour = startWorkTime.add(1, "h");
secondHour = secondHour.format('hh A');
$(".time-10-am").text(secondHour);

//Set Time For 11:00 A.M
let thirdHour = startWorkTime.add(1, "h");
thirdHour = thirdHour.format('hh A');
$(".time-11-am").text(thirdHour);

//Set Time For 12:00 P.M
let fourthHour = startWorkTime.add(1, "h");
fourthHour = fourthHour.format('hh A');
$(".time-12-pm").text(fourthHour);

//Set Time For 1:00 P.M
let fifthHour = startWorkTime.add(1, "h");
fifthHour = fifthHour.format('hh A');
$(".time-1-pm").text(fifthHour);

//Set Time For 2:00 P.M
let sixthHour = startWorkTime.add(1, "h");
sixthHour = sixthHour.format('hh A');
$(".time-2-pm").text(sixthHour);

//Set Time For 3:00 P.M
let seventhHour = startWorkTime.add(1, "h");
seventhHour = seventhHour.format('hh A');
$(".time-3-pm").text(seventhHour);

//Set Time For 4:00 P.M
let eighthHour = startWorkTime.add(1, "h");
eighthHour = eighthHour.format('hh A');
$(".time-4-pm").text(eighthHour);

//Set Time For 5:00 P.M
let ninethHoure = startWorkTime.add(1, "h");
ninethHoure = ninethHoure.format('hh A');
$(".time-5-pm").text(ninethHoure);


    /* create a task in the row that corresponds to the specified hour */
function timeScheduleColorManage() {
    // First hour At work
    time1 = moment().startOf('day').add(9, "hours");

    // Adjusts current time to the hour
    now = now.startOf("hour");
  
    // IF/ELSE TO ADD PAST, PRESET, FUTURE CLASS
    if (now.isAfter(time1)) {
        $(".form9").addClass("past");
    }
    else if (now.isBefore(time1)) {
        $(".form9").addClass("future");
    }
    else if (now.isSame(time1)) {
        $(".form9").addClass("present");
    };

   // Second hour At work
    time2 = moment().startOf('day').add(10, "hours");
    if (now.isAfter(time2)) {
        $(".form10").addClass("past");
    }
    else if (now.isBefore(time2)) {
        $(".form10").addClass("future");
    }
    else if (now.isSame(time2)) {
        $(".form10").addClass("present");
    };

    // Third hour At work
    time3 = moment().startOf('day').add(11, "hours");
    if (now.isAfter(time3)) {
        $(".form11").addClass("past");
    }
    else if (now.isBefore(time3)) {
        $(".form11").addClass("future");
    }
    else if (now.isSame(time3)) {
        $(".form11").addClass("present");
    };

    // Fourth hour At work
    time4 = moment().startOf('day').add(12, "hours");
    if (now.isAfter(time4)) {
        $(".form12").addClass("past");
    }
    else if (now.isBefore(time4)) {
        $(".form12").addClass("future");
    }
    else if (now.isSame(time4)) {
        $(".form12").addClass("present");
    };
    
    // Fifth hour At work
    time5 = moment().startOf('day').add(13, "hours");
    if (now.isAfter(time5)) {
        $(".form1").addClass("past");
    }
    else if (now.isBefore(time5)) {
        $(".form1").addClass("future");
    }
    else if (now.isSame(time5)) {
        $(".form1").addClass("present");
    };

    // Sixth hour At work
    time6 = moment().startOf('day').add(14, "hours");
    if (now.isAfter(time6)) {
        $(".form2").addClass("past");
    }
    else if (now.isBefore(time6)) {
        $(".form2").addClass("future");
    }
    else if (now.isSame(time6)) {
        $(".form2").addClass("present");
    };

    // Seventh hour At work
    time7 = moment().startOf('day').add(15, "hours");
    if (now.isAfter(time7)) {
        $(".form3").addClass("past");
    }
    else if (now.isBefore(time7)) {
        $(".form3").addClass("future");
    }
    else if (now.isSame(time7)) {
        $(".form3").addClass("present");
    };

    // Eighth hour At work
    time8 = moment().startOf('day').add(16, "hours");
    if (now.isAfter(time8)) {
        $(".form4").addClass("past");
    }
    else if (now.isBefore(time8)) {
        $(".form4").addClass("future");
    }
    else if (now.isSame(time8)) {
        $(".form4").addClass("present");
    };

    // ninth hour At work
    time9 = moment().startOf('day').add(17, "hours");
    if (now.isAfter(time9)) {
        $(".form5").addClass("past");
    }
    else if (now.isBefore(time9)) {
        $(".form5").addClass("future");
    }
    else if (now.isSame(time9)) {
        $(".form5").addClass("present");
    };
}
timeScheduleColorManage();

// EVENT LISTENER SAVE LOCAL STORAGE
$(".saveBtn").click(function () {
    event.preventDefault();
    const formValue = $(this).siblings(".form-control").val();
    const scheduleList = $(this).parent().data("hour");
    localStorage.setItem(scheduleList, formValue);
});

// GET ITEM FROM LOCAL STORAGE
const timeScheduleArr = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// FOR LOOP
for (let i = 0; i < timeScheduleArr.length; i++) {
    const dataHour = localStorage.getItem(timeScheduleArr[i]);
    // FORM-CONTROL
    $(".form" + timeScheduleArr[i]).val(dataHour);
}
