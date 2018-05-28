function changeTime(num) {
  var hours = Math.floor(num / 3600);
  var minutes = Math.floor(num / 60) - (hours * 60);
  var sec = (num % 60).toFixed(0);
  if (num < 3600) {
    return minutes + 'min ' + sec + 'sec';
  } else 
  return hours + 'h ' + minutes + 'min ' + sec + 'sec';
}

module.exports = {
  time: changeTime
};