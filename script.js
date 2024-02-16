const dateNew = document.getElementById("date")
const dayNew = document.getElementById("day")
const monthNew = document.getElementById("month")
const yearNew = document.getElementById("year")

const weekDays = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const monthAll = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

const today = new Date();
dateNew.innerHTML =(today.getDate()<10?"0":"") + today.getDate();
dayNew.innerHTML = weekDays[today.getDay()];
monthNew.innerHTML = monthAll[today.getMonth()];
yearNew.innerHTML = today.getFullYear(); 