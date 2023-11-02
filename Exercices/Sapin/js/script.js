//Version simple
let symbole = "A";

// for(let i = 0; i<10; i++)
// {
//     console.log(symbole);
//     symbole+="A";
     
// }

//Version complexe
symbole="";
let cime ="";
let largeur= 20; 
let millieu = parseInt(largeur/2);//pk pas utiliser Math.floor , Math.ceil
for(let i=0; i<largeur;i++)
{
    if(i==millieu) 
    {
        cime+="X";
        symbole+="|";
    }
    else
    {
        cime+=" ";
        symbole+=" ";
    }     
}
console.log(cime);
console.log(symbole);
for(let i = 1; i<millieu-1; i++)
{
    let tab = symbole.split("");
       
     for(let j=0;j<i;j++)
     {
        tab[(millieu-1)-j]="A";
        tab[(millieu+1)+j]="A";
     }
     //console.log(tab);
     symbole= tab.join("");
     console.log(symbole);
}
