# Javascript: manipulando DOM  
  
### Commands
  
Selecionar elementos
> document.getElementById('nomedoid')  
> document.querySelector('#nome')  

### Chamar evento basico  
  
<code>
const robotron = document.querySelector("#robotron")  
robotron.addEventListener("click", dizOi)  
function dizOi() {  
    alert('Oi')  
}  
</code>
