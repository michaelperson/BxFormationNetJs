
//change(); // pas de délais et changement immédiat
let cpt =0;
let timer1 =setTimeout(change,2000); //S'exécuter après x mms
let timer2 =setInterval(change,300); //S'exécuter toutes les x mms
let maDiv = document.getElementById("lol");
maDiv.addEventListener("mouseover", function(e){
     clearInterval(timer2);
})
maDiv.addEventListener("mouseout", function(e)
{
    timer2 =setInterval(change,300);
})
document.getElementById("cpt").innerText=cpt;
function change()
{
    
    if(maDiv.classList.length>0)
    { cpt++;
        if(maDiv.classList.contains("debut"))
        {
            //cible juste la classe debut et laisse les autres classes dans l'attribut
            maDiv.classList.remove("debut");
            maDiv.classList.add("fin");
        }
        else
        {
            //retire la totalité des class de la div
            maDiv.removeAttribute("class");
            maDiv.setAttribute("class","debut");
             
        }
        document.getElementById("cpt").innerText=cpt;
        //if(cpt==100) clearInterval(timer2);
    }
}

