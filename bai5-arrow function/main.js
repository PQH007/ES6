const sum = (a,b) => a + b;// khi sau dâu => không có dâu {} thì những gì viết đăng sau dấu
// => xem như là giá trị return
console.log(sum(2,2));

const sum1 = (a,b) => {
    // {a:a,b:b} // viết như vậy sẽ lỗi muốn return về 1 object phải bọc bằng ()
    ({a:a,b:b});
    // return {
    //     a: a,
    //     b: b
    // };
};
console.log(sum1);

const logger = log =>{ // nếu function chỉ có 1 tham số có thể bỏ luôn dấu ()
    console.log(log);
}
logger('messager ...');

const obj = {
    name: 'javascript',
    getName : function (){
        return this.name; // trả về javascript 
        // return this; // trả về 1 obj // this được gọi là context
        // arrow function k có context của nó nên khi đổi function thành => sẽ trả về undefined
    }
}

console.log(course.getName());  