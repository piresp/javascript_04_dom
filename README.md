# Javascript: manipulando DOM  
  
### Commands
  
Selecionar elementos
> document.getElementById('nomedoid')  
> document.querySelector('#nome')  

### Chamar evento basico  
  
##### Função nomeada  
<code>const robotron = document.querySelector("#robotron")</code>  
<code>robotron.addEventListener("click", dizOi)</code>  
<code>function dizOi() {</code>  
<code>    alert('Oi')</code>  
<code>}</code>  
  
###### Função Anônima  
<code>const robotron = document.querySelector("#robotron")</code>  
<code>robotron.addEventListener("click", () => {</code>  
<code>    console.log('Cliquei no robo.')</code>  
<code>})</code>  
