  
function convertArrayToObject(studentsData)
{
    const arrayToObject=studentsData.map(([name,skills, scores])=>({name,skills,scores}))
    return arrayToObject
}

//Original Data
const students = [
['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))