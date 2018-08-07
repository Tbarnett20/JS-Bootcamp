// Students score, total possible score
// 15/20 -> You got a C(75%)!
//  A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


const studentGrade = function (questionsRight, totalQuestions) {
  const gradePercentage = (questionsRight / totalQuestions) * 100
  let letterGrade = ''

  if (gradePercentage >= 90) {
      letterGrade = 'A'
  } else if (gradePercentage >= 80) {
      letterGrade = 'B'
  } else if (gradePercentage >= 70) {
      letterGrade = 'C'
  } else if (gradePercentage >= 60) {
      letterGrade = 'D'
  } else {
      letterGrade = 'F!!'
  }
   return `You got a ${letterGrade} (${gradePercentage}%)`
}

const finalGrade = studentGrade(4,20)

console.log(finalGrade)