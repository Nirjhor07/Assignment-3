/*function signature/sample */
function gonoVote(array) {
  if (Array.isArray(array) !== true) {
    return "Invalid";
  } else {
    const haCount = array.filter((item) => item === "ha").length;
    const naCount = array.filter((item) => item === "na").length;
    if (haCount > naCount) {
      return true;
    } 
    else if (haCount === naCount){
        return 'equal'
    }
    else {
      return false;
    }
  }
}

const arr = ["ha", "ha", "na", "na"];
const haCount = arr.filter((item) => item === "ha").length;
const naCount = arr.filter((item) => item === "na").length;
console.log(haCount);
console.log(naCount);
const result = gonoVote(arr);
console.log(result);
