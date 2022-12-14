/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */

/*  الجزء الأول والثاني من التمرين */
grades.pop()
grades.push(99)
console.log(grades)
grades.forEach( item => {
  all_grades_div.innerHTML += `<span>${item}<span>` });
 
let randomIndex = Math.floor(Math.random() * grades.length)

random_grade_div.innerHTML = `<span>#${randomIndex}: ${grades[randomIndex]}<span>`







/* الجزء الثالث من التمرين */

let course = {
  name: "UniCODE",
  track : "",
  studentsCount : 0,
  location : "Kuwait University"
}

//Change studentsCount,track property here

 track = "web",
 studentsCount = 40,
 

//Console log here
console.log("Hello my name is awsal i'm in "+ track+ " at " + course.name)


//Create student object here
let student= {
  name: "awsal",
  university: "kuwait university"
}

let UniCODE = {
name: "awsal" ,
track : "web",
location :" kuwait unversity",

}
