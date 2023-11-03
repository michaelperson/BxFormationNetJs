
document.getElementById("btnAddP01")
.addEventListener("click", 
function(e){
   ajouterAuPanier("p01"); document.getElementById("btnRemove01").removeAttribute("disabled");  
  });
document.getElementById("btnAddP02")
.addEventListener("click", function(e){ ajouterAuPanier("p02");document.getElementById("btnRemove02").removeAttribute("disabled");   });
document.getElementById("btnAddP03")
.addEventListener("click", function(e){ ajouterAuPanier("p03"); document.getElementById("btnRemove03").removeAttribute("disabled");  });

document.getElementById("btnRemove01")
.addEventListener("click", function(e){ retirerDuPanier("p01");
if(trouveElement("p01")==null) 
{e.target.setAttribute("disabled","disabled");}  
});
document.getElementById("btnRemove02")
.addEventListener("click", function(e){ retirerDuPanier("p02");
if(trouveElement("p02")==null) 
{e.target.setAttribute("disabled","disabled");}  
});
document.getElementById("btnRemove03")
.addEventListener("click", function(e){ retirerDuPanier("p03");
if(trouveElement("p03")==null) 
{e.target.setAttribute("disabled","disabled");}  
});
function ajouterAuPanier(p_id){ 
      
    let element = trouveElement(p_id);
    
    //Récupère le prix du produit
    let prix =  document.getElementById(p_id).children[1].innerHTML;
    //Récupérer le nom du produit qu'on ajoute
    let nom =  document.getElementById(p_id).firstElementChild.innerHTML;
    

    //Si non trouvé dans mon panier
    if(element==null){  
      let panier = document.getElementById("mon_panier");
      
      let new_tr = document.createElement("tr");
      let td_prix = document.createElement("td");
      let td_nomProd = document.createElement("td");
      let td_qte = document.createElement("td");
      
      let new_id = p_id + '_panier';
      new_tr.setAttribute('id',new_id);
      td_qte.innerHTML = 1;
      td_nomProd.innerHTML = nom;
      td_prix.innerHTML = prix;
      
      new_tr.appendChild(td_nomProd);
      new_tr.appendChild(td_prix);
      new_tr.appendChild(td_qte);
      panier.appendChild(new_tr);    
    }
    else
    {
      let element = trouveElement(p_id,true);
      element.lastElementChild.innerHTML = parseInt(element.lastElementChild.innerHTML) + 1;
    }
    
    let input_total  =  document.getElementById("prix_tot");
    input_total.value = parseInt(input_total.value) + parseInt(prix);
    
  }
  
  function retirerDuPanier(p_id){
    //Récupère le prix du produit
    let prix =  document.getElementById(p_id).children[1].innerHTML;
      
    let element = trouveElement(p_id,true);
     
    let input_total  =  document.getElementById("prix_tot");
    if(element!==null)
    {
      if(parseInt(element.lastElementChild.innerHTML)>1)
      {
        element.lastElementChild.innerHTML=parseInt(element.lastElementChild.innerHTML) - 1;
 
      }
      else
      {
        document.getElementById("mon_panier").removeChild(element);
      }
      input_total.value = parseInt(input_total.value) - parseInt(prix);
    }

    
  }

function trouveElement(p_id, inPanier=false)
{
    let panier_id = p_id + '_panier';
      
    //Parcourir le panier  
    let trPanier = document.getElementById("mon_panier").children;//Récupère les lignes tr du panier sous forme de tableau
    
    let trouve = false;
    for(i=0; i<trPanier.length; i++){
      let idProdPanier = trPanier[i].getAttribute('id'); //récupère le prodId du produit de la [i]ème ligne de mon panier
      if(panier_id === idProdPanier){
          
          trouve = true;
      }
        
    } 

    if(trouve)
    {
      if(inPanier) return document.getElementById(panier_id);
      else         return document.getElementById(p_id);
    }
    else
    {
      return null;
    }
}