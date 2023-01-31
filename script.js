let string = " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (el)=>{
    if(el.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(el.target.innerHTML== 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else{
       console.log(el.target);
       string = string + el.target.innerHTML;
       document.querySelector('input').value = string;
    }
    
  })
})