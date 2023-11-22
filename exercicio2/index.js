function teste(){
    let num = parseFloat(document.getElementById("numero").value);
    
    if (num > 0)
     alert(num + " é Positivo");
    else
     if(num < 0)
      alert(num + " é Negativo");
     else
      alert("Nem positivo nem negativo, nulo");
   }