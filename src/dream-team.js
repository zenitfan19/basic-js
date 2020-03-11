module.exports = function createDreamTeam(members) {
  let secretName = "";
  if(!members || !Array.isArray(members)) {
    return false;
  } else {
    members.forEach(function(item) {
      if(typeof item === "string") {        
        secretName += item.replace(/\s/g, '')[0].toUpperCase();
      }      
    });
    return secretName.split('').sort().join('');
  }
};