let p = document.querySelector('p');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text =p.innerText

addEventListener('mousemove',(e)=>{
    console.log(e.clientX,e.clientY);
    document.body.style.setProperty('--x',e.clientX+'px');
    document.body.style.setProperty('--y',e.clientY+'px');
})
addEventListener('click',(e)=>{
    console.log('clicked');
    document.body.classList.toggle('active');
    p.style.color = 'white';
})
let itration=0
p.addEventListener('mouseenter',()=>{
    console.log('mouseenter');
    setInterval(()=>{
        const str=text.split('').map((char,index)=>{
            if(index<itration){
                return char;
            }
            return characters.split('')[Math.floor(Math.random()*characters.length)];
        }).join('');
        console.log(str);
        p.innerText=str;
        itration+=0.3
        
    },60);

    
    
});