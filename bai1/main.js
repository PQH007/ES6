// khai báo biến bằng let. let dùng để khai báo biến chỉ dùng trong 1 pham vị nhất định
var bai1 = (a,b) =>{
    let tmp = a;
    a = b;
    b = tmp;
    console.log(a);
    console.log(b);
    console.log(tmp);
}
bai1(12,20);
// console.log(tmp);// lỗi vì tmp khai báo bằng let nên chỉ hoạt đọng trong function bai1

// bài 2 cách khai báo function bằng =>s

var bai2 = (a,b) =>{
    console.log('xin chào bạn '+ a + ' bạn thật '+ b);
}
bai2('PQHtobi','đẹp trai');
var bai2c2 = (a,b) => console.log('xin chào bạn '+ a + ' bạn thật '+ b);
bai2c2('linh','xinh gái');
var bai2c3 = a => {console.log(a)};
bai2c3('aya + hayate');
var bai2c4  = () =>{ // code chuẩn là dẫu => nằm cùng dòng với khai báo . đây là cách code chuẩn 
    console.log('hello world');
}

// bài 3 tách các phần tử của array hoặc object thành nhiều biến chỉ bằng một đoạn code duy nhất 
// destructuring assignments in ES6
// array
let date = [13,09,2022];
let [d,m,y] = date;
console.log('Day: '+d);
console.log('Month: '+m);
console.log('Year: '+y);
// nếu chỉ muốn lấy 1 phần tử thì bỏ trống các phần tử khác
let [,,ye] = date;
console.log('Year: '+ ye);

// object
let date1 = {
    day: 13,
    month: 9,
    year: 2022
}
let{day: d1, month: m1, year: y1} = date1;
console.log('Day: '+d1);
console.log('Month: '+m1);
console.log('Year: '+y1);

// gán biến trực tiếp cho array 
let name = ['hung'];
let [ten, email = 'phanquochung2511@gmail.com'] = name;
console.log(ten);
console.log(email);
// bài 4 default parameters in ES6
// cách khái báo biến mặc định ES6
var hello = (domain) => {
    domain = domain || 'PQH tobi';
    return domain;
}
console.log('khong truyền tham số: ' + hello());
console.log('có truyền tham số: ' + hello('Phan Quốc Hưng tobi'));
// khai báo mặc định trong ES6
let helloes6 = (domain1 = 'PQH tobi') =>{
    return domain1;
}
console.log('khong truyền tham số es6: ' + helloes6());
console.log('có truyền tham số es6: ' + helloes6('Phan Quốc Hưng tobi'));

// bài 5 rest parameters in ES6
//khai báo một hàm với số lượng thạm số không xác định
let functionName = (param1, param2, ...other) =>{
}
let domainList = (main,sub, ...other) =>{
    console.log('Main: '+main);
    console.log('Sub: '+sub);
    console.log('Other');
    console.log(other);
}
domainList('freetuts.net', 'facebook.com', 'google.com', 'zalo.com', 'iphone.com');

//bai 6 block scoped 
// phạm vi trong một khối, nghĩa là chỉ hoạt động trong phạm vi được khai báo bới dấu cặp {}
// {
//     var a = 6;
//     var a = 7;
//     console.log(a);
// }
{
    var a = 6;
    var printA = () =>{
        var a = 7;
        console.log(a);
    }
    printA();
    console.log(a);
}

// template literals in ES6
//hiển thị các biến trong chuỗi.
var template = (first,last) =>{
    let name = `your name is ${first} ${last}`;
    console.log(name);
}
template('hung','tobi');

//multi-line string in es6
// xuống dòng văn bản trong js
//es5
var roadPoemes5 = 'test\n\t'
+'multi-line\n\t'
+'Es5 \n\t'
console.log(roadPoemes5);
//es6 
var roadPoem = `PQH
Tobi
Đẹp
Trai`
console.log(roadPoem);

//destructuring assignment in es6

//enhanced object literals in es6

//arrow function in es6
// $('.btn').click((event) =>{
//     this.sendData()
//   })

//   var wait1000 =  new Promise((resolve, reject)=> {
//     setTimeout(resolve, 4000)
//   }).then(()=> {
//     console.log('Yay!')
//   })

// var wait1000 =  ()=> new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})

// wait1000()
//     .then( () => {
//         console.log('Yay!')
//         return wait1000()
//     })
//     .then( () => {
//         console.log('Wheeyee!')
//     });
// let dùng để khai báo biến trong phạm vi nhưng let là biến có thể thay đổi 
// vd: let name ='said';
//         name = 'rick';
// const thì không thể thay đổi và không thể gán lại được nữa 
// let và const đều giới hạn trong phạm vi được khai báo {}

 const myArray = ['PQH','Tobi','Aya','Hayate',5];
 let Arr2 = myArray.map(item => item);

 console.log(Arr2);