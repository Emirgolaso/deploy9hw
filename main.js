
let btn = document.getElementById('btn');
let text = document.getElementById('text');
let wrapper = document.getElementById('wrapper')
let btn2 = document.getElementById('btn2')

text.style.display = 'none';

btn.onclick = () =>{
     if(text.style.display == 'none'){
        text.style.display = 'block';
     }else{
        text.style.display = 'none';
     }
}

btn2.onclick = () => {

    wrapper.style.left = Math.round(Math.random() * (70 - 30) + 10)+'%';
    wrapper.style.top = Math.round(Math.random() * (70 - 30) + 20)+'%';


}

btn.onclick = () => {
   if (text.style.display === 'none') {
       text.style.display = 'block';
       wrapper.style.left = '50%';
       wrapper.style.top = '50%'; 
       wrapper.style.transform = 'translate(-50%, -50%)';
   } else {
       text.style.display = 'none'; 
   }
}


