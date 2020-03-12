module.exports = function getSeason(date) {
  let season;
  if(!arguments.length) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) {
    throw 'Invalid date';
  }
  switch (date.getMonth()+1) {
    case 1:
    case 2:    
      season = 'winter';
      break;    
    case 3:
    case 4:
    case 5:    
      season = 'spring';
      break;    
    case 6:
    case 7:
    case 8:    
      season = 'summer';
      break;    
    case 9:
    case 10:
    case 11:    
      season = 'fall';
      break;    
    case 12:
      season = 'winter';
      break;      
  }
  return season;
};
