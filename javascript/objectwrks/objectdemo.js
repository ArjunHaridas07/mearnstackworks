//student object rol,name,course,total
var student={
    rol:1000,
    name:"ram",
    course:"mearn",
    total:450
}
//print student,course name
console.log(student.name);
console.log(student.course);

//checking a property exists in object
console.log("gender" in student);

//add new property value
student["gender"]="male"
console.log(student);

//isVaccinated:true
student.isVaccinated=true
console.log(student);

//vaccine:covidshield
student.vaccine="covidshield"
console.log(student);

//modifying current value
student.vaccine="co-vaxin"
console.log(student);

student.total=100
console.log(student);
//adding value
student.total+=50
console.log(student);

for(var key in student){
    console.log(key);
    console.log(student[key]);
}