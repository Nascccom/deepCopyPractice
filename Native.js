const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const user = {
  name: "Bob",
  age: 23,
  isMarried: false,
  friends: ["Alex", "Nick", "John"],
};

let copyUser = {...user}
// console.log(user === copyUser);
// console.log(user.friends === copyUser.friends);
let deepCopyUser = {...user, friends: user.friends.map(el => el)}
// console.log(user === deepCopyUser);
// console.log(user.friends === deepCopyUser.friends);

let copyStudents = [...students]
// console.log(students === copyStudents);
// console.log(students[0] === copyStudents[0])

let deepCopyStudents = students.map(el => ({...el}))
// console.log(students === deepCopyStudents);
// console.log(students[0] === deepCopyStudents[0]);
// console.log(students);
// console.log(deepCopyStudents)

let sortByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1)
// console.log(sortByName)

let sortByScores = deepCopyStudents.sort((a, b) => a.scores > b.scores ? -1 : 1)
// console.log(sortByScores)

let bestStudents = students.filter(el => el.scores >= 100)
// console.log(bestStudents)

let topStudents = deepCopyStudents.splice(0, 3)
// console.log(topStudents)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents] // simpleCopy - not deep
// console.log(newDeepCopyStudents)

let notMarriedStudents = students.filter(el => !el.isMarried)
// console.log(notMarriedStudents)

let studentsName = students.map(el => el.name)
// console.log(studentsName)

let nameWithSpace = studentsName.join(' ')
//console.log(nameWithSpace)

let nameWithComma = studentsName.join(', ')
// console.log(nameWithComma)

let trueStudents = students.map(el => ({...el, isStudent: true}))
// console.log(trueStudents)

let studentsWithMarriedNick = students.map(el => (el.name === 'Nick' ? {...el, isMarried: true} : el))
// console.log(studentsWithMarriedNick)

let ann = students.find(el => el.name === "Ann")
// console.log(ann)
// console.log(students);

let bestStudent = students.reduce((acc, st) => acc.scores > st.scores ? acc : st)
// console.log(bestStudent);

// bestStudent = students[0];
// let bestStudent2 = students[1];
// console.log(bestStudent);
// console.log(bestStudent2);
//
// let bestStudent = students[0];
// let bestStudent2 = students[1];
// for (let i = 1; i < students.length; i++) {
//   if (bestStudent.scores > bestStudent2.scores) {
//     if (students[i].scores > bestStudent2.scores) {
//       bestStudent2 = students[i];
//     }
//   } else {
//     if (students[i].scores > bestStudent.scores) {
//       bestStudent = students[i];
//     }
//   }
//
// }
// let best1 = students[0]
// let best2 = students[0]
//
// for (let i = 0; i < students.length; i++) {
//   if (students[i].scores > best1.scores) {
//     best1 = students[i]
//
//   } else if (students[i].scores > best2.scores) {
//     best2 = students[i]
//   }
//
// }

let scoreSum = students.reduce((acc, cur) => acc + cur.scores, 0)
// console.log(scoreSum)

let addFriends = (students) => students.map(st => ({
  ...st,
  friends: students.map(s => s.name).filter(s => s !== st.name)
}))

console.log(addFriends(students))