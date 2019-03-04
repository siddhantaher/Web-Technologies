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

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}

// getpost()
createPost({
    title:'post three',body:'this is the third post'
},getpost)