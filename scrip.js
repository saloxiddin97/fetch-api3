let btn=document.querySelector('button')
btn.addEventListener('click',()=>{
    let card=document.querySelector('div')
fetch('https://randomuser.me/api/')
.then((res)=>res.json())
.then((data)=>{
console.log(data);
let user=data.results[0]
let div=document.querySelector('div')
card.innerHTML = `
<div>




<img src="${user.picture.large}" alt="">

<p>${user.name.first}</p>

</div>
`

})
})