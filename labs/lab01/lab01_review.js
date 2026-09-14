let variableLocal = 200
var variableGlobal = 100
variableLocal = "Hello"
console.log(variableLocal)

// Prototypes: one-time use opbejc created from the base prototype called Object
const newObject = {
    prop1: "Ramtin",
    prop2: "comp3123",
    method1: function (param1) {
        console.log(param1)
    }
}

console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.method1("Pizza")

// Prototype: constructure
// if the function name is starting with capitalized word it is a constructure
function Student (student_name, course, lunch){
    this.prop1 = student_name
    this.prop2 = course
    this.prop3 = lunch
    this.method1 = function (param1) {
        console.log(param1)
    }
}

const student_morning = new Student("Ramtin", "comp3123", "burger" )
console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)

let student_mornmorn = new Student("Meow", "comp8686", "yum yum")

// Portotypes: Add a method AFTER/IN ANOTHER File to give more capabilities to the prototype
Student.prototype.prop4 = "hard-coded value"
Student.prototype.method2 = function (param1){
    return param1
}

console.log(student_mornmorn)
console.log(student_mornmorn.prop4)
console.log(student_mornmorn.method2("chow main"))

// Class
class Prof{
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }
    method1(){
        return param1
    }
}

const morning_prof = new Prof ("Laily")
console.log(morning_prof
)

// calling morning prof method and directly next print its property