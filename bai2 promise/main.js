// sync : đồng bộ : nghĩa là cái nào sinh ra trước chạy trước cái nào sinh ra sau chạy sau
// console.log(1);
// console.log(2);
// Async : bất đồng bộ 
//những thao tác không biết khi nào xong nên là bất đồng bộ setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame
//call back
// setTimeout(() =>{
//     console.log(3); //sleep
// },1000);
// console.log(4);

// Callback hell 
// Pyramid of doom
// hay còn gọi là nỗi đau, tức là các việc tuần tự lồng vào nhau việc này phụ thuộc vào việc kia vd:
// setTimeout(() =>{
//     console.log(5); //sleep
//     setTimeout(() =>{
//         console.log(6); //sleep
//         setTimeout(() =>{
//             console.log(7); //sleep
//             setTimeout(() =>{
//                 console.log(8); //sleep
//             },1000);
//         },1000);
//     },1000);
// },1000);

// promise lý thuyết 
// buoc 1: khoi tao promise
// buoc 2: tao ra excutor
var promise = new Promise( (resolve,reject)=>{ //Executor 
    //logic
    // thanh cong: resolve()
    //that bai: reject()
    // resolve([
    //     {
    //         id:1,
    //         name:'javascript'
    //     }
    // ]);
    // reject('co loi!')
    resolve();
});
// co 3 trang thai
//1.Pendding : dang chờ 
//2.fulfilled : thanh công
//3.rejected: thất bại
promise
    // .then((courses)=>{
    //     console.log(courses);
    // })
    .then(()=>{
        return new Promise((resolve)=>{
           setTimeout(()=>{
            resolve(1);
           },3000);
        });
    })
    .then((data)=>{
        console.log(data);
        return(2);
    })
    .then((data)=>{
        console.log(data)
        return(3);
    })
    .then((data)=>{
        console.log(data);
    })
    // nếu trong then chưa 1 promise thì promise đó chạy xong thì then tiếp theo mới chạy
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log('done!');
    });

//promise được sinh ra để giải quyết những thao tác bất đồng bộ. trước khi có promise chúng ta thường sử dụng callback
// callback có 1 cái vấn đề là callback hell là code sẽ lồng vào nhau nhìn rối rắm khó hiểu
// promise được sinh ra từ phiên biển mới hơn es6 chúng ta có thể dùng để giải quyết vấn đề callback hell
// để tạo ra 1 promise chúng ta sử dụng từ khóa new với promise và trong contructor của nó chúng ta sẽ truyền vào 1 excutor funtion
// khi excutor thực thi chúng ta sẽ nhận được 2 tham số 
// 1 là resolve , 2 là reject 
// resolve chúng ta sẽ gọi khi thao tác thành công 
// reject gọi khi thao tác thất bại
// sau đó chúng ta sẽ sử dụng qua các phương thức .then và .catch
// then và catch đều nhận những callback function 
//nêu excutor lọt vào resolve thì sẽ lọt vào then
// nếu excutor lọt vào reject thì sẽ lọt vào catch

var sleep = (ms) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}

sleep(1000)
    .then(()=>{
        console.log(1);
        return sleep(1000);
    })
    .then(()=>{
        console.log(2);
        return sleep(1000);
    })
    .then(()=>{
        console.log(3);
        return sleep(1000);
    })
    .then(()=>{
        console.log(4);
        return sleep(1000);
    })