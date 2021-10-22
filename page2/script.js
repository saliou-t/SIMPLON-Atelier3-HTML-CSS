var compteur = 0; 

function temperature()
{
    var radio = document.querySelectorAll('#r');
    for (var i = 0; i < radio.length; i++) {
        if ( radio[i].checked == true ) break;
    }
    console.log(radio[i].value);	
    let n = radio[i].value;
    
    
    if (n == 1 || n == 3)
    {
        compteur += 1;
    }
    console.log(compteur);
}
let suivant = document.getElementById('suivant');
suivant.addEventListener("click", temperature);



