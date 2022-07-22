let arrayNum = [];
function getNum() {
  var getNumInPut = +document.getElementById("getNum").value;
  var output = document.getElementById("arrayNum");
  arrayNum.push(getNumInPut);
  output.innerHTML = arrayNum.toString();
}
function sumAllNum() {
  document.getElementById("result1").innerHTML = arrayNum.reduce(
    (total, num) => (num > 0 ? total + num : total + 0),
    0
  );
}
function countNum() {
  document.getElementById("result2").innerHTML = arrayNum.reduce(
    (count, num) => (num > 0 ? count + 1 : count + 0),
    0
  );
}

function min() {
  let min = arrayNum[0];
  for (var i = 0; i < arrayNum.length; i++) {
    if (min > arrayNum[i]) {
      min = arrayNum[i];
    }
  }
  document.getElementById("result3").innerHTML = min;
}
function min2() {
  let min = arrayNum[0];
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0 && min > arrayNum[i]) {
      min = arrayNum[i];
    }
  }
  document.getElementById("result4").innerHTML = min;
}
function evenLastNum() {
  var evenLastNum = -1;
  for (var i = arrayNum.length - 1; i > -1; i--) {
    if (arrayNum[i] % 2 === 0 && arrayNum[i] !== 0) {
      evenLastNum = arrayNum[i];
      break;
    }
  }
  document.getElementById("result5").innerHTML = evenLastNum;
}
function changelocate() {
  var locate1 = +document.getElementById("locate1").value;
  var locate2 = +document.getElementById("locate2").value;
  var tem;
  tem = arrayNum[locate1 - 1];
  arrayNum[locate1 - 1] = arrayNum[locate2 - 1];
  arrayNum[locate2 - 1] = tem;
  document.getElementById("result6").innerHTML = arrayNum.toString();
}
function sortArray() {
  for (var k = arrayNum.length - 1; k >= 0; k--) {
    var isSwapped = false;
    for (var i = 0; i < k; i++) {
      if (arrayNum[i] > arrayNum[i + 1]) {
        var tempolary = arrayNum[i];
        arrayNum[i] = arrayNum[i + 1];
        arrayNum[i + 1] = tempolary;
        isSwapped = true;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  document.getElementById("result7").innerHTML = arrayNum.toString();
}
function checkPrime(num) {
  var check = true;
  if (num < 2) {
    check = false;
  } else if (num === 2) {
    check = true;
  } else if (num % 2 === 0) {
    check = false;
  } else {
    for (var i = 3; i < Math.sqrt(num); i += 2) {
      if (num % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return check;
}
function findPrimeNum() {
  var numPrime = -1;
  for (var i = 0; i < arrayNum.length; i++) {
    if (checkPrime(arrayNum[i])) {
      numPrime = arrayNum[i];
      break;
    }
  }
  document.getElementById("result8").innerHTML = numPrime;
}
let arrayNum9 = [];
function getNum9() {
  var getNumInPut = +document.getElementById("getNum9").value;
  var output = document.getElementById("arrayNum8");
  arrayNum9.push(getNumInPut);
  output.innerHTML = arrayNum9.toString();
}
function countNum9() {
  count = 0;
  for (var i = 0; i < arrayNum9.length; i++) {
    if (arrayNum9[i] % 1 === 0) {
      count++;
    }
  }
  document.getElementById("result9").innerHTML = "Có " + count + " số nguyên";
}
function compare() {
  var countPo = 0;
  var countNe = 0;
  var result;
  for (var i = 0; i < arrayNum9.length; i++) {
    if (arrayNum9[i] > 0) {
      countPo++;
    } else if (arrayNum9[i] < 0) {
      countNe++;
    }
  }
  if (countPo > countNe) {
    result = "Số dương > Số âm";
  } else if (countPo < countNe) {
    result = "Số dương < Số âm";
  } else {
    result = "Số dương =  Số âm";
  }
  document.getElementById("result10").innerHTML = result;
}
