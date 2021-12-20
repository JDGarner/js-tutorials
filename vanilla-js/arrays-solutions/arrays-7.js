const classroomOne = ["Smakeo", "Blengit", "Snuffler", "Steebo", "Ribit", "Scoops", "Wagner"]
const classroomTwo = ["Scoops", "Rebbler", "Steebo", "Slarti", "Scaffler"]

const studentsInBothClassrooms = []

// Challenge 1:
// Using regular for loops
// Create a new array that contains students that are in both classroomOne and classroomTwo
// console.log the result

for (let i = 0; i < classroomOne.length; i++) {
  for (let j = 0; j < classroomTwo.length; j++) {
    if(classroomOne[i] === classroomTwo[j]) {
      studentsInBothClassrooms.push(classroomOne[i])
    }
  }
}

console.log(studentsInBothClassrooms)

// Challenge 2:
// Do the same as above, but using Array.filter and Array.includes instead of for loops

const studentsInBothClassrooms = classroomOne.filter(nameOfStudentInClassOne => {
  if(classroomTwo.includes(nameOfStudentInClassOne)) {
    return true;
  } else {
    return false;
  }
})


console.log(studentsInBothClassrooms)