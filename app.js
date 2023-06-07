const userNumber = prompt("Enter your desired number");
const getEvenOrOdd = function (number) {
  if (number % 2 === 0) {
    alert(`${number} is an even number.`);
  } else if (number % 2 > 0) {
    alert(`${number} is an odd number.`);
  } else {
    alert(`Error! Please enter a valid number`);
  }
};

getEvenOrOdd(parseInt(userNumber));
