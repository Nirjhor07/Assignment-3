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

const result = validOtp("qh-10985");
// const result = validOtp([{ name: "Akash" }]);
console.log(result);

// const num = "akash"; // string
// const numArr = ["akash", "batash"]; // object
// console.log(typeof numArr);
// const numObj = {
//     name : 'Akash',
//     color: 'nirjhor'
// }
// const array = [ {Name : "Akash", color: "black"},
//     {Name : "Nirjhor", Color : "black"},

// ]

// console.log (typeof numObj); // object
// console.log (typeof array); // object
