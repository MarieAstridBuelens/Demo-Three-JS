// var personnage1 = { name : "Bilbil", pdv : 200 };

// function byePDV(personnage) {
//     personnage.pdv -= 1; 
//     return personnage;
// }

// function combienIlreste(personnage) {
//     byePDV(personnage);  
//     alert("il reste " + personnage.pdv + "pdv");  
// }

// combienIlreste(personnage1); 


var createPerso = function(x){
    var self = {}
    self.name = x

    self.talk = function(){
    var reponse = prompt(self.name + " : Et c'est une bonne situation ça, scribe ? \n\n 1) Tapez 'Oui'. \n 2) Tapez la seule bonne réponse si vous ne choisissez pas 'Oui'.")

    if (reponse == "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres. Des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres, forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l'interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n'est pas mon cas, comme je disais là, puisque moi au contraire, j'ai pu : et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu'amour ! Et finalement, quand beaucoup de gens aujourd'hui me disent « Mais comment fais-tu pour avoir cette humanité ? », et bien je leur réponds très simplement, je leur dis que c'est ce goût de l'amour ce goût donc qui m'a poussé aujourd'hui à entreprendre une construction mécanique, mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi..."){
        alert("Qu'on le couvre d'or.")
    }
    else if (reponse == "Oui"){
        alert("Qu'on le jette aux crocodiles.")
    }
    else{
        alert("Pas de bonne réponse, pas d'or. Pas d'or, pas de palais. Pas de palais,... Pas de palais.")
    }

    }

    return self
}

var perso = createPerso("Panoramix");
perso.talk();

