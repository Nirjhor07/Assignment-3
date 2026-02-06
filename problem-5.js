/*function signature/sample */
function analyzeText(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  } else {
    const words = str.trim().split(/\s+/);
    let bigWord = "";

    for (let word of words) {
      if (word.length > bigWord.length) {
        bigWord = word;
      }
    }

    const obj = {
      longwords: bigWord,
      token: str.replace(/\s+/g, "").length,
    };

    return obj;
  }
}




// {"longwords":"little","token":22}
const name = "Akash is my name  awuifbuwyebfuwebfuwybef";
const result = analyzeText(name);
console.log(result);
// console.log(name, typeof name);
// console.log(name.length)
