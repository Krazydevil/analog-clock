let a = 0;
setInterval(function(){
   
    a+=10;
     document.querySelector('.sec_hand').style.transform =`rotate(${a}deg)`
},1000)

let b = 0;
setInterval(function(){
   
    b+=4;
     document.querySelector('.min_hand').style.transform =`rotate(${b}deg)`
},30000)

let c = 0;
setInterval(function(){
   
    c+=1;
     document.querySelector('.hour_hand').style.transform =`rotate(${c}deg)`
},20000)
