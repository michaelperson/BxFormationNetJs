/*la chaine*/
let chaine = "ma formation javascript";

/*retourner la position de ma*/
let posA = chaine.indexOf("ma")+1;
console.log(`Position de ma : ${posA}`);

/*Indice de la lettre p*/
let IndiceP= chaine.indexOf('p');
console.log(`Index de p : ${IndiceP}`);

/*la lettre situé à l'indice 21*/
let lettre21= chaine.charAt(21);
console.log(`Lettre à l'index 21 : ${lettre21}`);

/*Remplacer javascript par c#*/
let newChaine = chaine.replace("javascript", "C#");
console.log(chaine);
console.log(newChaine);

/*Découper sur l'espace*/
let tab = chaine.split(" ");
console.log(tab);

/*inverser la chaine de caractère*/
console.log(chaine.split("").reverse().join("").replaceAll(" ",""));

//Vérifier si c'est un palyndrome
let lemot = "mot";
let isPalyndrome = lemot.toLowerCase()
.split("")
.reverse().join("")=== lemot.toLowerCase();
if(isPalyndrome)
{
    console.log(`C'est un palyndrome : ${lemot}`);
}
else
{
    console.log(`Ce n'est pas un palyndrome : ${lemot}`);
}


/*Petit bonus demandé par la majorité :p*/
                               
let lachaine ="Ceci n'est pas un script";
let final =""; 
for(let i= lachaine.length-1; i>=0; i--)
{
    final+= lachaine[i];
}
console.log(final);
 