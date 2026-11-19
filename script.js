

/* PREPARATION DU MEMORY_RECUPERATION DES CASES DU MEMORY */

const casesDuMemory = document.querySelectorAll(".caseMorpion");


/*PREPARATION DU MEMORY_REMPLIR LA GRILLE ALEATOIREMENT */
/*Remplir la grille aléatoirement_ RECUPERER LES PHOTOS DE LEGUMES*/

const photosLegumes = ["1.svg","2.svg",
"3.svg","4.svg","5.svg",
"6.svg"
]

const photoInterrogation = ["./ressource/question.svg"]


/*Remplir la grille aléatoirement_DOUBLER LES PHOTOS*/
const cartesDuMemory = [...photosLegumes,...photosLegumes]



/*Remplir la grille aléatoirement_MELANGER LES PHOTOS */
for (let i = 0 ; i < cartesDuMemory.length ; i++){

  const aleat = Math.floor(Math.random()*12);
[cartesDuMemory[i],cartesDuMemory[aleat]] = [cartesDuMemory[aleat],cartesDuMemory[i]]
}


/*Remplir la grille aléatoirement_DONNER A CHAQUE CASE DU MEMORY (c'est à dire à l'image correspondante) DE NOUVELLES
DATA/PROPRIETES (c'est nouvelles data sont données par la liste de sources "cartesDuMemory"(ce sont des "src" PARTIELLES))
*/
casesDuMemory.forEach((caseClicke, index) =>{
  caseClicke.dataset.image = cartesDuMemory[index];
});

/*_____________________________________________________________________________________________________________________________________*/




/* VARIABLE ET FONCTIONS DU MEMORY */

/*VARIABLES */
let nombreDoublonsTrouve = 0 ;
let premierTirage = null ; 
let secondTirage = null ;

/*FONCTIONS*/
/*Fonctions_RETOURNER L'IMAGE */  
function retournerImage (caseClicke) {
  caseClicke.src = "./ressources/memory-legume/" + caseClicke.dataset.image;
}




/*DEROULEMENT DE LA PARTIE */

casesDuMemory.forEach((caseClicke) =>{
  caseClicke.addEventListener("click", () => {

    retournerImage(caseClicke);

  });


});









