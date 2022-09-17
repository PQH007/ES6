//1.var/let,const: scope, hosting
//2.const/var,let: assignment

//code block : if else, loop, {}, ...
// giống cả 3 đều có thể dùng để khai báo biến, đều có thể gán giá trị cho nó
{
    var course = 'javascript';
    const course = 'java';
    {
        let coursel = 'jacascript';
        const course = 123;
        console.log(coursel);
    }
}
// const khai báo trùng được nếu khác block code 
console.log(course);
// console.log(coursel); // không truy cập được 

// hosting : đưa lên đầu
// var được hỗ trợ hosting, còn let và const thì không 

// const k thể sử dụng toán tử gán lại lần thứ 2 
//vd 
const a = 1;
a = 100;
// console.log(a);// lỗi 
const b = {
    name:'pqh tobi'
};
b.name = 'pqh'; // được vì ở đây là phép gán cho name chứ k phải cho a nên const k lỗi 
// code thuần : thì dùng var 
//có sử dụng thư viện babel: const, let
// khi định nghĩa biến và không gán lại biến đó thì dùng const 
//khi cần gán lại giá trị cho biến : let
let isSuccess  = false;
if(true){
    isSuccess = true; // khi dùng 1 biến và phải gán lại thì dùng let
}