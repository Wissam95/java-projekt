var clockNums = document.getElementsByClassName("clock-num"),
i,
rotateNum = 30;
clockNumSpans = document.querySelectorAll(".clock-num span"),
hoursHand = document.getElementById("hour-hand"),
minutesHand = document.getElementById("minute-hand"),
secondsHand = document.getElementById("second-hand");
for (i = 0; i < 12; i++){
    clockNums[i].style.transform = "rotate(" + rotateNum+ "deg)";
    clockNumSpans[i].style.transform = "rotate(-" + rotateNum+ "deg)";
    rotateNum += 30;
}
myClock();
function myClock() {
    var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
    secondsHand.style.transform = "rotate(" + seconds * 6 + "deg)";
    minutesHand.style.transform = "rotate(" + (minutes * 6 + seconds / 10) + "deg)";
    hoursHand.style.transform = "rotate(" + (hours * 30 + minutes / 2) + "deg)";
    setTimeout(myClock, 500);

}