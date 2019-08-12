// делим на год, дни, месяцы и т.д. и оставляем остаток
// составляем строку
function formatDuration (seconds) {
  var Seconds = {
    YEAR: 31536000,
    DAY: 86400,
    HOUR: 3600,
    MINUTE: 60, 
    SECOND: 1
  }
  var arrHumanTimeFormat = [];
  var modulo;
  var timeFormat = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  };

  if(!seconds) {
    return 'now'
  }

  if(seconds >= Seconds.YEAR) {
    timeFormat.year = Math.floor(seconds / Seconds.YEAR);
    modulo = seconds % Seconds.YEAR;
  }

  if(seconds >= Seconds.DAY) {
    modulo ? timeFormat.day = Math.floor(modulo / Seconds.DAY) : timeFormat.day = Math.floor(seconds / Seconds.DAY);
    modulo ? modulo = modulo % Seconds.DAY : modulo = seconds % Seconds.DAY;
  }

  if(seconds >= Seconds.HOUR) {
    modulo ? timeFormat.hour = Math.floor(modulo / Seconds.HOUR) : timeFormat.hour = Math.floor(seconds / Seconds.HOUR);
    modulo ? modulo = modulo % Seconds.HOUR : modulo = seconds % Seconds.HOUR;
  }

  if(seconds >= Seconds.MINUTE && seconds !== Seconds.HOUR) {
    modulo ? timeFormat.minute = Math.floor(modulo / Seconds.MINUTE) : timeFormat.minute = Math.floor(seconds / Seconds.MINUTE);
    modulo ? modulo = modulo % Seconds.MINUTE : modulo = seconds % Seconds.MINUTE;
  }

  if(seconds >= Seconds.SECOND){
    if(seconds < Seconds.MINUTE) {
      timeFormat.second = seconds
    } else {
      timeFormat.second = modulo;
    }
  }

  for(let key in timeFormat) {
    if(timeFormat[key]) {
      arrHumanTimeFormat.push(timeFormat[key] == 1 ? timeFormat[key] + ' ' + key : timeFormat[key] + ' ' + key + 's');
    }
  }

  for(let i = 0; i < arrHumanTimeFormat.length; i++){
    if(i < arrHumanTimeFormat.length - 2) {
      arrHumanTimeFormat[i]  = arrHumanTimeFormat[i] + ', ';
    } else if (arrHumanTimeFormat.length !== 1 && i == arrHumanTimeFormat.length - 1) {
      arrHumanTimeFormat[i]  = ' and ' + arrHumanTimeFormat[i];
    }
  }

  return arrHumanTimeFormat
    .join('')
}

// CW 
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}