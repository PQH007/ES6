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