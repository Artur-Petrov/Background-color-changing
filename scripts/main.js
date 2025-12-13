let button = document.getElementById('btn');
let color = document.getElementsByClassName('color')[0];

button.addEventListener('click', function(){
 let randomHex = Math.random().toString(16).slice(2,8).padEnd(6, '0');
 document.body.style.backgroundColor = '#' + randomHex;
 color.innerText = '#' + randomHex;
 color.style.color = '#' + randomHex;
})