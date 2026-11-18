/*
var tableauCorrespondanceMemoryImage = [
  {nom:"legumes",nomAffiche:"Légumes",img:"./ressources/memory-legume/memory_detail.png",chemin:"./ressources/memory-legume/",extension:"svg",nombreCartes:8},
  {nom:"animaux",nomAffiche:"Animaux",img:"./ressources/animaux/memory_detail_animaux.png",chemin:"./ressources/animaux/",extension:"webp",nombreCartes:28},
  {nom:"animauxAnimes",nomAffiche:"Animaux animés",img:"./ressources/animauxAnimes/memory_detail_animaux_animes.png",chemin:"./ressources/animauxAnimes/",extension:"webp",nombreCartes:8},
  {nom:"animauxDomestiques",nomAffiche:"Animaux Domestiques",img:"./ressources/animauxdomestiques/memory_detail_animaux_domestiques.png",chemin:"./ressources/animauxdomestiques/",extension:"jpg",nombreCartes:10},
  {nom:"chiens",nomAffiche:"Chiens",img:"./ressources/chiens/memory_details_chiens.png",chemin:"./ressources/chiens/",extension:"webp",nombreCartes:23},
  {nom:"dinosaures",nomAffiche:"Dinosaures",img:"./ressources/dinosaures/memory_detail_dinosaures.png",chemin:"./ressources/dinosaures/",extension:"jpg",nombreCartes:10},
  {nom:"dinosauresAvecNom",nomAffiche:"Dinosaures avec nom",img:"./ressources/dinosauresAvecNom/memory_details_dinosaures_avec_nom.png",chemin:"./ressources/dinosauresAvecNom/",extension:"jpg",nombreCartes:10},
  {nom:"alphabetScrabble",nomAffiche:"Lettre Scrablle",img:"./ressources/alphabet-scrabble/memory_detail_scrabble.png",chemin:"./ressources/alphabet-scrabble/",extension:"png",nombreCartes:26}
];
*/

  /*REMPLIR LA GRILLE ALEATOIREMENT */
  /*Remplir la grille aléatoirement_ RECUPERER LES PHOTOS DE LEGUMES*/

  const photoslegumes = ["./ressources/memory-legume/1.svg","./ressources/memory-legume/2.svg",
  "./ressources/memory-legume/3.svg","./ressources/memory-legume/4.svg","./ressources/memory-legume/5.svg",
  "./ressources/memory-legume/6.svg"
  ]

  /*Remplir la grille aléatoirement_DOUBLER LES PHOTOS*/
  const cartesdumemory = [...photoslegumes,...photoslegumes]



  /*Remplir la grille aléatoirement_MELANGER LES PHOTOS */
  for (let i = 0 ; i < cartesdumemory.length ; i++){

    const aleat = Math.floor(Math.random()*12);
  [cartesdumemory[i],cartesdumemory[aleat]] = [cartesdumemory[aleat],cartesdumemory[i]]
  }

  /*Remplir la grille aléatoirement_AFFICHER LE PLATEAU */
    
  const casesSelect01 = document.getElementById("0");
  const casesSelect02 = document.getElementById("1");
  const casesSelect03 = document.getElementById("2");
  const casesSelect04 = document.getElementById("3");
  const casesSelect05 = document.getElementById("4");
  const casesSelect06 = document.getElementById("5");
  const casesSelect07 = document.getElementById("6");
  const casesSelect08 = document.getElementById("7");
  const casesSelect09 = document.getElementById("8");
  const casesSelect10 = document.getElementById("9");
  const casesSelect11 = document.getElementById("10");
  const casesSelect12 = document.getElementById("11");

  const imageSelect01 = document.getElementById("image_0");
  const imageSelect02 = document.getElementById("image_1");
  const imageSelect03 = document.getElementById("image_2");
  const imageSelect04 = document.getElementById("image_3");
  const imageSelect05 = document.getElementById("image_4");
  const imageSelect06 = document.getElementById("image_5");
  const imageSelect07 = document.getElementById("image_6");
  const imageSelect08 = document.getElementById("image_7");
  const imageSelect09 = document.getElementById("image_8");
  const imageSelect10 = document.getElementById("image_9");
  const imageSelect11 = document.getElementById("image_10");
  const imageSelect12 = document.getElementById("image_11");


  casesSelect01.addEventListener("click", () => {
    imageSelect01.src = cartesdumemory[0]
  })
  casesSelect02.addEventListener("click", () => {
    imageSelect02.src = cartesdumemory[1]
  })
  casesSelect03.addEventListener("click", () => {
    imageSelect03.src = cartesdumemory[2]
  })
  casesSelect04.addEventListener("click", () => {
    imageSelect04.src = cartesdumemory[3]
  })
  casesSelect05.addEventListener("click", () => {
    imageSelect05.src = cartesdumemory[4]
  })
  casesSelect06.addEventListener("click", () => {
    imageSelect06.src = cartesdumemory[5]
  })
  casesSelect07.addEventListener("click", () => {
    imageSelect07.src = cartesdumemory[6]
  })
  casesSelect08.addEventListener("click", () => {
    imageSelect08.src = cartesdumemory[7]
  })
  casesSelect09.addEventListener("click", () => {
    imageSelect09.src = cartesdumemory[8]
  })
  casesSelect10.addEventListener("click", () => {
    imageSelect10.src = cartesdumemory[9]
  })
  casesSelect11.addEventListener("click", () => {
    imageSelect11.src = cartesdumemory[10]
  })
  casesSelect12.addEventListener("click", () => {
    imageSelect12.src = cartesdumemory[11]
  })

