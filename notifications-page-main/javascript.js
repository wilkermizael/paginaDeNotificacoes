let numero = 3;
let parada = true;

function clicar(){
    let mark = document.getElementById('mark');
    let angela = document.getElementById('angela');
    let jacob = document.getElementById('jacob');
    mark.style.backgroundColor = "#ffffff";
    angela.style.backgroundColor = "#ffffff";
    jacob.style.backgroundColor = "#ffffff";
    document.getElementById('number').style.backgroundColor = "#ffffff";
    document.getElementById("pointer1").style.visibility= "hidden";
    document.getElementById('pointer2').style.visibility= "hidden";
    document.getElementById('pointer3').style.visibility= "hidden";

  
}


function checkmark(){
    
    let mark = document.getElementById("mark");
    mark.style.backgroundColor = "#ffffff"
    numero = numero -1;
    if(parada) {
        document.getElementById('number').innerHTML = numero;
        parada = false;
    }
   document.getElementById('pointer1').style.visibility= "hidden";
   if(numero == 0){
    document.getElementById('number').style.backgroundColor = "#ffffff";
    
 }

 
}

function checkangela(){
    let angela = document.getElementById("angela");
    angela.style.backgroundColor = "#ffffff";
    numero = numero -1;
   document.getElementById('number').innerHTML = numero;
   document.getElementById('pointer2').style.visibility= "hidden";
   if(numero == 0){
    document.getElementById('number').style.backgroundColor = "#ffffff";
 }
 }

 function checkjacob(){
    let jacob = document.getElementById("jacob");
    jacob.style.backgroundColor = "#ffffff";
    numero = numero -1;
    document.getElementById('number').innerHTML = numero;
    document.getElementById('pointer3').style.visibility= "hidden";
        if(numero == 0){
        document.getElementById('number').style.backgroundColor = "#ffffff";
     }
}