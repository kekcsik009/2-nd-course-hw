const date = new Date(2014, 11, 31, 12, 30, 0);
console.log(date.toTimeString());
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
console.log(date.toLocaleString(options.day));