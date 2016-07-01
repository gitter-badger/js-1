function dayAndTime(n) {
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
  function addZero(i) { // this will be used to create the 24 hour time format - it adds an extra zero eg 0 hour or midnight becomes 00 
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
    
  var d = new Date(2016, 3, 16, 24, 00); //set date to a sunday and time to midnight
  d.setMinutes(n); //set minutes to n

  var dayOfWeek = days[d.getDay()]; //get the day as a string
  var h = addZero(d.getHours()); //get the hour and add zero where required
  var m = addZero(d.getMinutes()); //get the minute and add zero where required
  
  return dayOfWeek + " " + h + ":" + m;
}