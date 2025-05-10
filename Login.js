var btn= window.document.getElementById('btn');

btn.onclick = function (){
    let em= window.document.getElementById('email').value;
    let se= window.document.getElementById('senha').value;
    let res= window.document.getElementById('res');
    if (em === 'guinunespaludo246@gmail.com' && se === '123'){//'guinunespaludo246@gmail.com' && se === 'gonzaga123'){
         location='teste02.html';
    } else {
          alert('Suas credenciais estão incorretas');   
    }     
}
