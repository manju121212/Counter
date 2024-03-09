

let span = document.getElementById("span");
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let reset = document.getElementById('reset');
let increment = document.getElementById('increment');

let incNumber = 1;
increment.addEventListener("change" ,function(e){
      incNumber = parseInt(e.target.value);   
})

add.addEventListener("click" ,function(){
        let currValue = parseInt(span.innerText);
        span.innerText = `${incNumber + currValue }`;
})

subtract.addEventListener("click" ,function(){
        let currValue = parseInt(span.innerText);
        if(currValue > 0){
                span.innerText = `${ currValue - incNumber }`;
        }
        else{
        	span.innerText =0;
        }

        
      
      
       
    })

reset.addEventListener('click',()=>{
	    span.innerText =0;
})

