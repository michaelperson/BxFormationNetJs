

let prixLivre = prompt("Prix du livre ?");
let nbLivre = prompt("Nombre de livre?");

if(isNaN(prixLivre) || isNaN(nbLivre))
{
    alert("Veuillez déposer le(s) livre(s). Nous vous offrons un stage de lecture ")
}
else
{
    while(!Number.isInteger(Number(nbLivre)))
    {
        nbLivre = prompt("Nombre de livre (ENTIER)?");
    }

     //Convertir en float et en int pour le calcul
     let prixHtc = parseFloat(prixLivre)*parseInt(nbLivre);
     let prixTTC = prixHtc*1.21;
     alert(`Vous me devez ${prixTTC} €`);
}