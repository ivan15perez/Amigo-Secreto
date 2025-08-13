
let almacenaNombre=[];

function agregarAmigo(){
    let nombre=document.getElementById('amigo').value;
        if (nombre==""){
            alert('Por favor, inserte un nombre')    
        }
        else{
            almacenaNombre.push(nombre);
            agregaNombreLista();
            limpiarCaja();
        }
}

function limpiarCaja(){
    document.getElementById('amigo').value='';
}

function agregaNombreLista(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML='';
  
    for(let i = 0; i < almacenaNombre.length; i++){
        let item = document.createElement("li"); 
        item.textContent = almacenaNombre[i]; 
        lista.appendChild(item); 
    }
}

function sortearAmigo(){
    
    if(almacenaNombre.length>0){
        let indice=Math.floor(Math.random()*almacenaNombre.length);
        let lista2=document.getElementById('resultado');
        lista2.innerHTML=`<li><strong>Amigo sorteado:</strong> ${almacenaNombre[indice]}</li>`;//Imprimo en pantalla el nombre
    }
    else{
        alert('No hay amigos seleccionables por el momento\nSe sugiere ingresar amigos a la lista antes de Sortear' )
   }
}
