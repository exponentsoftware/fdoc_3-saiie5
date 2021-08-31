
// Given Data---------------------
const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let newStudent=JSON.parse(JSON.stringify(student))              // New copy without mutating original 
newStudent.skills.frontEnd.push({skill:'BootStrap', level:8})      //Adding data as per Questions
newStudent.skills.backEnd.push({skill:'Express', level:9})
newStudent.skills.dataBase.push({skill:'SQL', level:8})
newStudent.skills.dataScience.push('SQL')
console.log(newStudent.skills)                                  //  Updated data in new copied object
console.log(student.skills)                                     // Original object remains without mutating

console.log("Length of Student Object key "+Object.keys(newStudent).length)
console.log("Length of Student Object Values "+Object.values(newStudent).length)
console.log("Length of Skills Object key "+Object.keys(newStudent.skills).length)

for (let prop in student) {                             //checking of student object has graphicDesign property or not
    if(prop==="graphicDesign")
    {
        console.log("It has graphicDesign proprties")
    }
}

for (let prop in student) {                             //  Iterating the keys of the student object
     console.log(prop)
}