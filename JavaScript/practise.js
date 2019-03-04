var options = {
    method: 'get',
    headers: {
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*"
    },
  }


fetch('http://10.0.1.36/worklife/tweets',options).then(res=>res.json()).then(data=>console.log(data))



var a=document.createElement('div')



a.className='article'
a.id='art'
a.setAttribute('title','hey')
tezt=document.createTextNode('sssup')

a.append(tezt)
console.log(a)

var b=document.createElement('div')
b.className='newclass'

n=document.createTextNode('solllllllllllllllllllla')
b.append(n)

a.append(b)
