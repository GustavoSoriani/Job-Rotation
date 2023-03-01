let originalString = "exemplo"; // string que podera ser invertida
let invertedString = ""; // string invertida 

for (let i = originalString.length - 1; i >= 0; i--) {
  
  invertedString += originalString[i];
}

console.log("String original:", originalString);
console.log("String invertida:", invertedString);