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
 