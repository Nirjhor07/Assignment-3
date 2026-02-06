// Problem Statement - 1
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else if (discount <= 0 || discount >= 100) {
    return "Invalid";
  }
  const discountAmount = (currentPrice * discount) / 100;
  const newPrice = currentPrice - discountAmount;
  const actualOutput = newPrice.toFixed(3);
  return actualOutput;
}

// Problem Statement - 2
/*function signature/sample */
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  } else if (otp.startsWith("ph-") !== true) {
    return false;
  } else if (otp.length !== 8) {
    return false;
  } else if (otp.length === 8) {
    return true;
  }
}

// Problem Statement - 3
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
    wrongAns = wrongAns * 0.5;
    let newResult = rightAns - wrongAns;
    return Math.round(newResult);
  } else {
    return "Invalid";
  }
}
