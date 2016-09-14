function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
 var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
	   'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime,message) {
  var clock = document.getElementById(id);
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
 var hoursSpan = clock.querySelector('.hours');
	
  function updateClock() {
    var t = getTimeRemaining(endtime);

      hoursSpan.innerHTML =t.hours
    minutesSpan.innerHTML = ('0' +t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
		document.getElementById(id).innerHTML = message;
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline,'Happy Christmas');