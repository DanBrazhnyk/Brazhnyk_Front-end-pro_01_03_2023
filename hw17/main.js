const div = document.createElement('div')
const input = document.createElement('input')
document.body.appendChild(input)

input.onfocus=()=>{
div.style.backgroundColor = 'yellow';    
div.style.width='300px';
div.style.height='200px';
document.body.appendChild(div)
}
input.onblur=()=>div.remove()