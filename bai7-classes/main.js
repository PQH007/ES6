// cách viết thông thường
// function Course(name,price){
//     this.name = name;
//     this.price = price;
// }
//cách viết class
class Course {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}
const phpCourse = new Course('PHP',1000);
const jsCourse = new Course('js',1200);
console.log(phpCourse);
console.log(jsCourse);
