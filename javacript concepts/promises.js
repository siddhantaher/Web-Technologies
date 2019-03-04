const posts=[
    {title:'post one',body:'this is the first post'},
    {title:'post two', body:'this is the second post'}
]

function getpost(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML= output
    }, 1000);
}

function createPost(post){

return new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        posts.push(post);
const error= true;

if(!error){
    resolve()
}else{
    reject('Something went wrong')
}



    },2000)
    })

}

// getpost()
// createPost({
//     title:'post three',body:'this is the third post'
// }).then(getpost)
//   .catch(err=>console.log(err))  




async function init(){
    console.log('hey')
    createPost({
             title:'post three',body:'this is the third post'
         });
    getpost()
}
init()
// const promise1= Promise.resolve('hello world')
// const promise2= 10;
// const promise3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'goodbye')
// })
// const promise4= fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())


// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values))