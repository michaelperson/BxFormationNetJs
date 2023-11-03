console.log("ciao");
const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
let interval = 50;
let timerHoraire = setInterval(horaire, interval + 1);
let tHoraire = setTimeout(horaire, interval);


//1. Affichez l’heure actuelle (heure : minutes : secondes)
//2. Affichez la date et l’heure sur votre page web. es : Mardi 25 Avril  13:16:32
function horaire() {
    let today = new Date();
    let heure = goodString(today.getHours());
    let minutes = goodString(today.getMinutes());
    let secondes = goodString(today.getSeconds());

    let divHoraire = document.getElementById("horaire");
    let stringHoraire = heure + " : " + minutes + " : " + secondes;
    //document.title !!
    let title = document.head.getElementsByTagName("title")[0].innerHTML = stringHoraire;

    let day;
    switch (today.getDay()) {
        case 0:
            day = "Dimanche";
            break;
        case 1:
            day = "Lundi";
            break;
        case 2:
            day = "Mardi";
            break;
        case 3:
            day = "Mercredi";
            break;
        case 4:
            day = "Jeudi";
            break;
        case 5:
            day = "Vendredi";
            break;
        case 6:
            day = "samedi";
            break;
        default:
            day = "This is my day!"
            break;
    }
    

    divHoraire.innerHTML = day + " " + goodString(today.getDate()) + " " + mois[today.getMonth()]+" " +  stringHoraire;

}

function goodString(val) {
    val = parseInt(val);
    if (val < 10) { val = "0" + val.toString(); }
    return val;
}
