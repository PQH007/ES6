var sleep = (ms) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}
var i = 0
sleep(1000)
    .then(()=>{
        console.log(i);
        i++;
        return sleep(1000);
    })
    .then(()=>{
        console.log(i);
        i++;
        return new Promise((resolve,reject)=>{
            reject('co loi');
        })
    })
    .then(()=>{
        console.log(i);
        return sleep(1000);
    })
    .catch((err)=>{
        console.log(err);
    })


var promise =  Promise.resolve('Success');
// var promise = Promise.reject('error');
promise 
    .then((result)=>{
        console.log('result: ',result);
    })
    .catch((err)=>{
        console.log('result: ',err);
    })
var promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([1]);
    },2000)
})
var promise2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve([2,3]);
    },5000)
})

Promise.all([promise1,promise2])
    .then(([result1,result2])=>{
        console.log(result1.concat(result2));
    })