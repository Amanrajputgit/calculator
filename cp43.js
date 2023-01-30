// // // let a = document.getElementsByTagName('div')[0]
// // // // a.innerHTML = a.innerHTML + '<h1> Hello !</h1>';

// // // let divi = document.createElement('h2');
// // // divi.innerHTML = '<h1> helllo </h1>';
// // // a.append(divi);
// // // // a.prepend(div)
// // // // a.before(div)
// // // // a.after(div)
// // // // a.replaceWith(div)
// // first.insertAdjacentHTML('beforebegin', '<p> beforebegin</p>')
// // first.insertAdjacentHTML('beforeend', '<p> beforeend</p>')
// // first.insertAdjacentHTML('afterbegin', '<p> afterbegin</p>')
// // first.insertAdjacentHTML('afterend', '<p> afterend</p>')

// first.remove()


// first.className=( "yellow")
// first.classList.add("red")
// first.classList.contains("yellow")
// first.classList.toggle("red")
// first.classList.remove("red")

// document.write("hello")


// const sum = (a, b, c) => {
//     console.log("Running"+(a + b + c))
    
//  }
// setInterval(sum,2000, 1, 5, 4)
// setInterval(function(){
//     alert("setinterval")
// }, 5000);
// let a =setTimeout(function () {
//     alert(" i am inside of settimeout")
// }  , 1000)

// let b = prompt("run timeout yes/no")
//     if ("yes"== b) {
// console.log(a)   
//     }
//     else{
//         clearTimeout(a)
//     }



// let a = document.getElementsByClassName("no")[0]
// a.onclick = () => {
//     let b = document.getElementsByClassName("no")[0]
//     b.innerHTML = "hello "
// }


//  52 callbacks


// function loadScript(src, callbacks) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("loaded script" + src)
//         callbacks(src);
//     }
//     script.onerror= function(){
//         console.log("Error loading script with SRC:"+ src);
//         callbacks(new Error("Src got some error"))
//     }
//     document.body.appendChild(script);
// }

// function hello(error,src)
// {
//     if (error){
//         console.log(error)
//         return;
//     }
//     alert('hello'+ src);
// }

// function gm(src)
// {
//     alert('good morning'+src);
// }
// loadScript("https://www.youtube.com/",hello)

// 54
// let promise = new promise(function(resolve, reject) {
//     alert("hello")
//     resolve(34)
// })
// console.log("hellow one")
// setTimeout(function() {
//     console.log("hellow two in 2 sec")
// }, 2000);

// console.log("my name is "+"hello Three")

// console.log(promise)


// 55
// let p1 = new Promise(function(resolve, reject){
//     console.log("Promise is pending")
//     setTimeout(() => {
//         // console.log("I am a promise and I am resolve")
//         resolve(true)
//     }, 5000)
// })
// let p2 = new Promise(function(resolve, reject){
//     console.log("Promise is pending")
//     setTimeout(() => {
//         // console.log("I am a promise and I am rejected")
//         reject(new Error("i am a error"))
//     }, 5000)
// })


// // p2.catch((error)=>{
// //     console.log("some error occourred")
// // })
// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//         console.log(error)
    
// })

// console.log(p1,p2)


// 57 multiple promise handlers

// let p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 2000);
// })
// p.then(() =>{
//     console.log("promise is resolved")
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(4);
//         }, 4000);
//     })
// }).then((value)=>{
//     console.log(value)
// })

// p.then(()=>{
//     console.log("promise RELOADED")
// })


//  58 primise API
// let p3 = new Promise((resolve,rejecct)=>{
//     setTimeout(() => {
//         resolve ("value 3")
//     }, 3000);
// }
// )

// let p2 = new Promise((resolve,rejecct)=>{
//     setTimeout(() => {
//         resolve ("value 2")
//         // rejecct(new Error)
//     }, 2000);
// }
// )

// let p1 = new Promise((resolve,rejecct)=>{
//     setTimeout(() => {
//         resolve ("value 1")
//     }, 1000);
// }
// )

// // p1.then((value)=>{
// //     console.log(value)
// // })
// // p2.then((value)=>{
// //     console.log(value)
// // })
// // p3.then((value)=>{
// //     console.log(value)
// // })

// // let promise_all = Promise.all([p1,p2,p3])
// // let promise_all = Promise.allSettled([p1,p2,p3])
// // let promise_all = Promise.race([p1,p2,p3])
// // let promise_all = Promise.any([p1,p2,p3])
// // let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error("hey"))
// promise_all.then((value)=>{
//     console.log(value)
// })


// 59 async and await funtion

// async function aman(){
//     let delhiweather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("27 D")
//         }, 2000);
//     })
//     let agraweather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("28 D")
//         }, 4000);
//     })
//     // delhiweather.then(alert)
//     // agraweather.then(alert)
//     console.log("fetching delhi weather Please wait...")
//     let delhiw = await delhiweather
//     console.log("fetching delhi weather is"+delhiw)
    
//     console.log("fetching agra weather Please wait...")
//     let agraw = await agraweather
//     console.log("fetching agra weather is "+ agraw)
//     return[delhiw, agraw]
// }
// const amen = ()=>{
//     console.log("hey this is men")
// }
// const main1= async() =>{
//     console.log("welcome to weather control room")
// let a = await aman()
// let b = await amen()
    
// }
// main1()


// 60 error handling: try and catch

// setTimeout(() => {
//     console.log("Hacking wifi... Please wait...")
// }, 1000);

// try{
// setTimeout(() => {
//   try {
//         console.log(rahul)
//     } catch (err) {
//         console.log("error ")
//     }
        
// }, 1000);
// }
// catch(err){
//     console.log("lol")
// }

// setTimeout(() => {
//     console.log("Fetching username and Password...")
// }, 2000);

// setTimeout(() => {
//     console.log("Hacking rahul facebook id Please wait...")
// }, 3000);

// 61 The error object & custom errors

// try {
//     let age= prompt("Enter your age")
//     age =Number.parseInt(age)
//     if(age>150){
//         throw new ReferenceError("this is probably not true")
        
//     }
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)

// }
// console.log("This script is still running")

// 62 The finally clause

//  const f= function(){
// try {
//     console.log("this is prank")
//     // console.log(bb)
//     return
    
// } catch (err) {
//     console.log("this is an error")
// }
// finally{
//     console.log("goood morningggg")
// }
// }
// f()


// practice set chapter 9

// const loadScript = async(src)=>{
//     return new Promise ((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = ()=>{
//             resolve(src + " success")
//         }
//         document.head.append(script)
//     })
// }
//  Problem 1
// let a = loadScript("https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js")
// a.then((value)=>{
//     console.log(value)
// })

// problem 2
// const main2 = async ()=>{
//     console.log(new Date().getSeconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js")
//     console.log(a)
//     console.log(new Date().getSeconds())
// }
// main2()

//  Problem 3
// let p = ()=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // resolve(4)
//         reject(new Error("This is not acceptable"))
//     }, 3000);
// })
// }

// let a = async() =>{
//     try{
//     let c = await p()
//     console.log(c)
//     }
//     catch ( err){
//         console.log("this error is handaled")
//     }
// }
// a()

// Problem 4

let p1 = async()=>{ 
return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
}

let p2 = async()=>{ 
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 3000);
})
}
let p3 = async ()=>{ 
     return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(10)
    }, 1000);
})
}

const run = async ()=>{
    console.time("run")
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3()
    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let alla = await Promise.all([a1, a2, a3])
    console.log(alla)

    // console.log(a1,a2,a3)
    console.timeEnd("run")

}
run()