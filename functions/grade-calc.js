// students score, total posssible score
// 15/20 -> You got a C (75%) !
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (studentScore, totalPossibleScore) {
  let total = (studentScore / totalPossibleScore) * 100;

  if (total >= 90 && total <= 100) {
    return `You got a A (${total}%)!`;
  } else if (total <= 89 && total >= 80) {
    return `You got a B (${total}%)!`;
  } else if (total <= 79 && total >= 70) {
    return `You got a C (${total}%)!`;
  } else if (total <= 69 && total >= 60) {
    return `You got a D (${total}%!)`;
  } else if (total <= 59) {
    return `You got a F (${total}%!)`;
  } else {
    return `Please Input a valid result`;
  }
};

let realResult = gradeCalc(15, 20);
console.log(realResult);
