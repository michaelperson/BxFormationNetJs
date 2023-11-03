console.log(document.frmComplete.elements);
 document.frmComplete.addEventListener("submit", function(e)
 {

    e.preventDefault(); //J'empêche l'envoie auto du formulaire
    if(document.getElementById("search").value !=="")
    {
        document.frmComplete.submit(); // ce qui me permet de choisir quand je l'envoie
    }
    else
    {
        alert("Veuillez remplir le champs");
        document.getElementById("search").focus();
        document.getElementById("search").style.backgroundColor="Red";
        document.frmComplete.reset(); //vide le formlaire
    }
 });