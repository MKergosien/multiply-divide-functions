function divide(number) {
  return number / 10;
}

function multiply(number) {
  return number * 5;
}

function clearNumber(){
  document.getElementById("inputNumber").value="";
}


function Convert() {

  var providedNumber = document.getElementById("inputNumber").value;
  
  if (providedNumber === "") {
    alert("Please enter a number. ")
  }

  if (providedNumber > 10000) {
    var result = divide(providedNumber);
  }
  else if (providedNumber < 10000) {
    var result = multiply(providedNumber);
  }
  else{
    alert("That is not a number......");
  }

  document.getElementById("answerOutput").innerHTML = result;

    clearNumber();
}

var button = document.getElementById("converter");
button.onclick = Convert;