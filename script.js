const lowercase = "abcdefghijklmnopqrstuvwxyz";
const upercase = lowercase.toUpperCase();
const lowercaseArray = lowercase.split("");
const upercaseArray = upercase.split("");
const numbers = "1234567890";
const numbersArray = numbers.split("");
const symbols = "!@#$%^&*()_+{};~?,./";
const symbolsArray = symbols.split("");

const upercaseBox = document.querySelector("#uppercase");
const numbersBox = document.querySelector("#numbers");
const symbolsBox = document.querySelector("#symbols");
const passwordOutput = document.querySelector("#password");
const generateBttn = document.querySelector("#generate");
generateBttn.addEventListener("click", generatePass);

function generatePass() {
  let password = "";
  let charSet = "";
  let length = parseInt(document.querySelector("#length").value);
  passwordOutput.value = "";

  charSet += lowercase;
  if (upercaseBox.checked) {
    charSet += upercase;
  }
  if (numbersBox.checked) {
    charSet += numbers;
  }
  if (symbolsBox.checked) {
    charSet += symbols;
  }
  for (let i = 0; i < length; i++) {
    let randIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randIndex];
  }
  passwordOutput.value = password;
}
