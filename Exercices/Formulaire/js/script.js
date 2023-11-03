let f = document.forms[0];

f.addEventListener("submit", function(e)
{
    e.preventDefault();
    if(f.nom.value.trim()!=="" && f.prenom.value.trim()!=="" && f.codePostal.value.trim()!=="")
    {
        document.getElementById("message").innerHTML = "Formulaire OK";
    }
    else
    {
        if(f.nom.value.trim()==="") f.nom.style.backgroundColor = "red";
        if(f.prenom.value.trim()==="") f.prenom.style.backgroundColor = "red";
        if(f.codePostal.value.trim()==="") f.codePostal.style.backgroundColor = "red";
    }
})

document.getElementById("btnComplete").addEventListener("click", function(e)
{  f.nom.style.backgroundColor = "";
 f.prenom.style.backgroundColor = "";
 f.codePostal.style.backgroundColor = "";
    f.nom.value="Dupont";
    f.prenom.value="Jean";
});

document.getElementById("btnreset").addEventListener("click", function(e){
    f.nom.style.backgroundColor = "";
    f.prenom.style.backgroundColor = "";
    f.codePostal.style.backgroundColor = "";
    document.getElementById("errorCp").innerHTML="";
    f.reset();
});

document.getElementById("cp").addEventListener("change", function(e){
    if(Number.isNaN(Number(e.target.value)))
    {   e.target.value="";
        e.target.focus();
        document.getElementById("errorCp").innerHTML="Le code postal est compris entre 1000 et 9000";
    } 
    if(e.target.value<1000 || e.target.value>9999)
     {
        e.target.value="";
        e.target.focus();
        document.getElementById("errorCp").innerHTML="Le code postal est compris entre 1000 et 9000";
     }
     else
     {
        document.getElementById("errorCp").innerHTML="";

     }
});