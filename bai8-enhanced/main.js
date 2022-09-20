/*
1.định nghĩa key:value cho object 
2.định nghĩa method cho object
3.định nghĩa key cho object dưới dạng biến 
*/

var name = 'javascript';
var price = 1000;
// var course = {
//     name: name,
//     price:price
// }

// var course ={
//     name,
//     price,
//     getName() {
//         return name;
//     }
// }

var filedName = 'name';
var filedPrice = 'price';
const course ={
    [filedName]: 'javascript',
    [filedPrice]:1000
};
console.log(course);

// default parameters 
// giá trị mặc định
// dùng khi những hàm làm ra có những tham số k bắt buộc phải nhập
logger = (log = 'Gia tri mac dinh!') =>{
    //trong es6 chỉ cần gán trực tiếp vào thì sẽ tự hiểu đó là giá trị mặc đinh
    // if(typeof log === 'undefined');{
    //     log ='gia tri mac dinh';
    // }
    console.log(log);
}
logger('messager ...')

logger1 = (log, type = 'log')=>{
    console[type](log);
}
logger1('Message...','error');