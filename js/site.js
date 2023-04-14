// controller function
const getValues = () => {
  // get the user's input
  let userInput = document.getElementById("message").value;
  // send it through the reversed string function
  const palindromeInfoArray = checkForPalindrome(userInput);

  displayString(palindromeInfoArray);
};

// business logic
const checkForPalindrome = (message) => {
  // declare empty string
  let reversedStr = "";
  let inputStr = message.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const output = [message];

  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
  }
  output.push(reversedStr, reversedStr == inputStr);
  return output;
};

// view function
const displayString = (array) => {
  // display string on the page
  if (array[2] == true) {
    // congrats message
  document.getElementById("failure-alert").classList.add("d-none");
  document.getElementById("success-message").textContent = `${array[0]} written backwards is ${array[1]}! You've got yourself a palindrome.`;
  document.getElementById("success-alert").classList.remove("d-none");
  } else {
    // too bad message
  document.getElementById("success-alert").classList.add("d-none");
  document.getElementById("failure-message").textContent = `${array[0]} written backwards is ${array[1]} which is not a palindrome.`;
  document.getElementById("failure-alert").classList.remove("d-none");
  }
};

// let msg = document.getElementById("message").value;
// // alert(msg);

// Swal.fire({
//   backdrop: false,
//   title: "Palindrome",
//   text: msg,
// });
