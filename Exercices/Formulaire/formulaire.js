let form = document.nowIfoundIt;  // == document.forms[0] == document.forms.nowIfoundIt
console.log("ciao");
//console.log(form);
/* // eeem pas parfait --
0 : input#nom
1 : input#prenom
2 : button*/

document.nowIfoundIt.addEventListener("submit", (event) => {
    //No submit par default
    event.preventDefault();
    //Mon formulaire est-il bien rempli?
    //1. quelqu'un a tappé des esaces a la place d'ecrire --> trim 
    if (form.nom.value.trim() !== "" && form.prenom.value.trim() !== "" && form.code_postal.value.trim() !== "") {
        //after --> check the same, but with regex v. function myCheckCP()
        let myCP = form.code_postal.value;
        if (myCP.length < 4 || myCP.length > 4) {
            alert(" le code postal a 4 cifres, inserele correctemente, svp");
            document.getElementById("code_postal").focus();
            document.getElementById("code_postal").style.backgroundColor = "Red";
        }
        else {
            document.nowIfoundIt.submit();
        }
    }
    else {
        //le formulaire n"est pa bonne
        if (f.nom.value.trim() === "") f.nom.style.backgroundColor = "red";
        if (f.prenom.value.trim() === "") f.prenom.style.backgroundColor = "red";
        if (f.code_postal.value.trim() === "") f.codePostal.style.backgroundColor = "red";
    }
});

let autoComplit = document.getElementById("monBoutonCompliteAuto");
autoComplit.addEventListener("click", function (event) {
    //tolgo il comportamento x default
    event.preventDefault();
    let f = document.forms.nowIfoundIt;  // ==   let form = document.nowIfoundIt;
    f.nom.value = "Jean";
    f.prenom.value = "Dupond";
    console.log(`nom: ${f.nom.value} prenom: ${f.prenom.value} `)
});

let deleted = document.getElementById("monBoutonResetAll");
deleted.addEventListener("click", (event) => {
    event.preventDefault();
    //document.forms.item(0).reset();
    document.nowIfoundIt.reset();

});


//function myCheckCP()
let myCPTag = document.getElementById("code_postal")
myCPTag.addEventListener("change", (event)=>{
    //event.target == my input code_postal
    let valueCP = event.target.value;
    const regex = "/[0-9]{4}/g";
    // found is a tab with string with 4 el -->
    //--> if I insert '12345678' --> 'found = ["1234", "5678"]
    //--> if I insert '123456' --> 'found = ["1234"]    !!!!
    const found = valueCP.match(regex);
    if(found===null || found[0]!==e.target.value){
        // --> NO correct CP
        event.target.value = ""; //vider le champ
        event.target.focus();
        alert("le code postal a 4 cifres, inserele correctemente, svp");
    }
})
