// var logger = (a,b,...params) =>{
//     console.log(params);
// }
// nếu có thêm tham số đứng trước thì những tham số lấy ra sẽ là tham số còn lại
// như ở đây a = 1; b = 2; params sẽ lấy từ 3 trở đi 
// logger(1,2,3,4,5,6,7,8);

// với object
// thay vì phải console.log(obj.name) từng cái thì ta đưa trực tiếp vào tham số của function
var logger1 = ({name, price, ...rest})=>{
     console.log(name);
     console.log(price);
     console.log(rest);
}
logger1({
    name: 'javascript',
    price: 1000,
    description: 'Description content'
})

// với array
var logger2 = ([a,b,...rest])=>{
    console.log(a);
    console.log(b);
    console.log(rest);
}
logger2([2,6,1,2,3,4,5]);

// spread : toán tử giải
// là dấu ... khi đặt trước 1 object hay 1 array nó sẽ loại bỏ đi dấu [] và lấy các element của nó 
var array1 = ['javascript', 'PHP', 'ruby'];
var array2 = ['Reactjs', 'Dart'];
var array3 = [...array2, ...array1];
console.log(array3)

// với object 
var object1 = {
    name:'javasript'
}
var object2 ={
    price:1000
}
var object3 = {
    ...object1,
    ...object2
}
console.log(object3);

// ví dụ

var defaultConfig = {
    api:'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
}

// execer đã kế thừa mọi thuộc tính của default nhưng api thì ghi đè nên lấy api của nó
var excerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap'
}
console.log(excerciseConfig);

var array = ['javascript', 'PHP', 'ruby','Reactjs'];

var logger = (...rest) => {
    for(var i = 0; i< rest.length;i++){
        console.log(rest[i]);
    }
}

logger(...array);