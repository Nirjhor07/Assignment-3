/*function signature/sample */
function finalScore(omr) {
  if (typeof omr !== "object") {
    return "Invalid";
  }
  let rightAns = omr.right;
  let wrongAns = omr.wrong;
  let skipAns = omr.skip;
  let total = rightAns + wrongAns + skipAns;

  if (total <= 100) {
    wrongAns = wrongAns*0.5;
   let newResult = rightAns - wrongAns;
   return Math.round(newResult);
   
  } else {
    return "Invalid";
  }
}

const scoreOmr = { right: 50, wrong: 10, skip: 40 };
const result = finalScore(scoreOmr);

// console.log(typeof scoreOmr);

console.log(result);
