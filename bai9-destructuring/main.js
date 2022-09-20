// destructuring: phân rã dùng cho array và object 
var array = ['javascript', 'PHP', 'Ruby'];

//cách làm thông thường 
// var a = array[0];
// var a = array[1];
// var a = array[2];

//với destructuring
// var [a,b,c] = array;
// console.log(a,b,c);

//rest parameters : lấy ra những phần còn lại
// var [a, ...rest] = array;
// console.log(a);
// console.log(rest);

var course = {
    name: 'javascript',
    price:1000,
    image: 'image-address',
    children: {
        name: 'Reactjs'
    },
    // description: 'description value'
}

// var {name, price, image} = course;
var {name: parentName,description = 'default description' ,...rest} = course;
var {children:{name}} = course;
// vì name của children đã ghi đè lên name của course nên chúng ta phải đặt tên mới cho name của course
// khi không có description trong object thì sẽ trả về default description
console.log(name);
console.log(parentName);
console.log(rest);
console.log(description);


// khi sử dụng dấu ... để định nghĩa tham số thì nó là toán tử rest
var logger = (...params) =>{
    console.log(params);
}
logger(1,2,3,4,5,6,7,8);