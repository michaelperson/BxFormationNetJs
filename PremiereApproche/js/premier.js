// const tab = new Array();
// tab["zorro"]="Renard";
// tab["Fox"]= "Renard";

// console.log(tab["zorro"]);
// console.log(tab.Renard);
// tab.push("test");
// tab.push("Bernardo");
//  console.log(tab);
//  console.log(tab.test);
//  console.log(tab[1]);


//  const tabnormal= ["Tornado","Garcias"];
//  console.log(tabnormal);
//  tabnormal.push("DelaVega");
//  console.log(tabnormal);


// let fnInverse = function(lachaine)
//  {
//     return lachaine.split("").reverse().join("");
//  }

//  let fnPasInverse = function(lachaine)
//  {
//     return "J'a rien pu faire pour inverser cette chaine";
//  }

//  function inverse(chaine, fnDInversion)
//  {
//     if(fnDInversion!= undefined)
//     {
//         return fnDInversion(chaine);
//     }
//     else
//     { 
//         lanouvellechaineinverse ="";
//         for(let i=chaine.length-1; i>=0; i--)
//         {
//             lanouvellechaineinverse+=chaine[i];
//         }
//         return lanouvellechaineinverse; 
//     }
//  }

 
//   let reponse =inverse("la chaine que je dois passer sinon ça marche moins bien!");
//   console.warn(reponse);
//   let reponse2 = inverse("la chaine que je dois passer sinon ça marche moins bien!", fnInverse);
//   console.info(reponse2);

//   let reponse3 = inverse("la chaine que je dois passer sinon ça marche moins bien!", fnPasInverse);
//   console.info(reponse3);
 
//   let lambdaExpression = (chaine) => { lanouvellechaineinverse ="";
//                                         for(let i=chaine.length-1; i>=0; i--)
//                                         {
//                                             lanouvellechaineinverse+=chaine[i];
//                                         }
//                                         return lanouvellechaineinverse; 
//                                     }
//    console.warn(lambdaExpression("Zorro")); 
//     let reponse4 = inverse
//                   ("la chaine que je dois",
//                   (lachaine)=>{return lachaine.split("").reverse().join("")}
//                   )

//     console.log(reponse4);
 
//    try{

//        //console.log(variablequinexistepas.length);
//    // throw 'ceci est une exception business et non système'
//    console.log("Pas d'exception");
//    }
//    catch(exception)
//    {
//     console.warn("Ceci est une exception!!!");
//     console.error(exception);

//    }
//    finally
//    {
//     console.log("Je serais toujours exécuté :p");
//    }
  

   function toto(element)
   {
    console.log(element.value);
    element.parentElement.style="background-color:red";
    element.value="Garcias";
   }

   