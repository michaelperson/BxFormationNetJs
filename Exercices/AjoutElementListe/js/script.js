

 
let ul =document.getElementById("liste");

document.getElementById("txtElementToAdd").addEventListener("keypress", function(e)
{
    if(e.key!==" ")
    {
        
        document.getElementById("AddEl").removeAttribute("disabled");
    }   
     
});


/*Ajout de l'événement*/
document.getElementById("AddEl").addEventListener("click", function(e)
{     
    //Exercice 1
    // let nbElement = ul.getElementsByTagName("li").length;
    // let nouvelElement = document.createElement("li"); 
    // nouvelElement.innerHTML="element n°"+(nbElement+1)
    // document.getElementById("liste").appendChild(nouvelElement);

    //Exercice 2  
    let texte =  document.getElementById("txtElementToAdd");
    texte.style.backgroundColor="";
    document.getElementById("error").style.display="none";
    try{
      
            if(texte.value.trim()==="") 
            {
                
                throw("Remplissez le champs");
            }
            else
            {
                let nouvelElement = document.createElement("li"); 
                nouvelElement.innerHTML=texte.value;
                document.getElementById("liste").appendChild(nouvelElement);
                texte.value="";
            }
    }
    catch(error)
    {
        document.getElementById("error").style.display="";
        document.getElementById("error").innerText=error;
        texte.style.backgroundColor="Red";
    }
    finally
    {
        document.getElementById("AddEl").setAttribute("disabled", "disabled");
    }
});