// creo la mia tab paniere
let myProduit = "";
let quantity = 0;

//1. Je récupère ce que je veux ...
//si j'ajoute un élément, je crée un tr
function addProduit_et_prix(prod, prix_unitaire) {
    myProduit = prod;
    let table = document.getElementById("panier");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td_prix = document.createElement("td");
    let td_quantity = document.createElement("td");

    table.appendChild(tr);
    tr.appendChild(td);
    td.innerText = myProduit;
    tr.appendChild(td_prix);
    td_prix.innerText = prix_unitaire;
    quantity++;
    tr.appendChild(td_quantity);
    td_quantity.innerText = quantity;

    let p_List = document.getElementsByTagName("p");
    if (p_List.length == 0) { totale(prix_unitaire); }
    else {
        let myInput = document.getElementById("total");
        myInput.value = parseFloat(myInput.value) + parseFloat(prix_unitaire);
    }

    //console.log(tr.childNodes);   //prod -> tr.childNodes[0]
    quantity = 0;
}

//input totale
function totale(prix_unitaire) {
    let p = document.createElement("p");
    p.innerHTML = 'Prix total :';
    let div = document.getElementById("myTotal");
    div.appendChild(p);
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "total");
    input.value = prix_unitaire;
    //document.getElementsByTagName("body").appendChild(input);
    div.appendChild(input);

}

function delQuantity(prod, prix_unitaire) {

    //for search my product in 'panier'
    let tab_panier = document.getElementById("panier")
    let tr_panier_list = tab_panier.childNodes;

    //for change my total: 
    let myInput = document.getElementById("total");
    /* 
    //console.log(tr_panier_list);
    tr_panier_list.forEach(el => {
        el.innerText;
        console.log(el.innerText);
        //"Chaise\t25\t1" opp "Meuble TV\t250\t1"
    }); 
    */
   //Find
    for (let i = 0; i < tr_panier_list.length; i++) {
        let el = tr_panier_list[i];
        let allString = el.innerText; //"Chaise\t25\t1" opp "Meuble TV\t250\t1"
        let allTab = allString.split("\t");
        let produit = allTab[0];
        //let prix_un = allTab[1];
        let quantiti =parseInt(allTab[2]);

        // console.log(produit);
        // console.log(prix_un);
        // console.log(quantiti);
        
        //if I have a the 'produit' with 'quantiti'> 1  --> delete quantity (and subtraction)
        if(prod == produit && quantiti > 0){
            if (parseFloat(myInput.value) >= parseFloat(prix_unitaire)) {
                myInput.value = parseFloat(myInput.value) - parseFloat(prix_unitaire);
            }
            allTab[2] = (quantiti - 1).toString();
        }

        //if I have a the 'produit' with 'quantiti' = 1  --> 'quantiti' becams 0, so deleted tr
        // if (prod == produit && quantiti == 1) {
        //     //TODO remove the element to the list and delete tr-tag
        //     //tr_panier_list.
        // }
        //if I have no 'produit' --> I don't I don't reduce the price
        //TODO

    }

    // if (parseFloat(myInput.value) >= parseFloat(prix_unitaire)) {
    //     myInput.value = parseFloat(myInput.value) - parseFloat(prix_unitaire);
    // }

}
