console.log(document); 

let mdp = "carotte";
let mdpEntre = "";

function displayAlert(event) {
    var elem = document.querySelector("#display");

    if (event.key == "Enter") {
        if (mdpEntre == mdp) {
            alert("Oui !");
        } else {
            alert("wtf.");
        }
        elem.innerHTML = "Je suis une crûûûûche.";
        mdpEntre = "";
    } else if (event.key == "Backspace") {
        mdpEntre = "";
        elem.innerHTML = "Soit ma "; 
    } else {
        mdpEntre += event.key;
        elem.innerHTML += event.key;
    }
}

document.addEventListener('keydown', displayAlert);

/* pseudo code : que se passe-t-il lorsqu'on lance cette fonction :
 function addEventListener(trigger, callback) {

    var event = {};
    if (trigger == "click") {
        callback(event)
    } 

*/