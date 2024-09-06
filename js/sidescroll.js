import {render} from './render.js' ;
import {MovePerso} from './physics.js' ;

let createPerso = function(name){
    var self = {};
    self.name = name;
    self.hp = 0;
    self.x = 0;
    self.y = 0;
    self.vx = 0; //sa vitesse sur l'axe horizontal
    self.vy = 0; //sa vitesse sur l'axe vertical
    self.bag = "canif"; 
    self.talk = function(){
        console.log(self.name + "says: * Je suis perdu*");
    }
    return self
}

var hauteurMax = 20;
var hauteurMin = 0;

let perso = createPerso("fgkqdj")



function callbackFunc(event) {
    if (event.key == "ArrowRight") {
        if (event.type == "keydown") {
            perso.vx = 1;
        } 
        else if (event.type == "keyup") {
            perso.vx = 0;
        }
    }
    else if (event.key == "ArrowLeft") {
        if (event.type == "keydown"){
            perso.vx = -1;
        }
        else if (event.type == "keyup"){
            perso.vx = 0;
        }
    }
    else if (event.key == "ArrowUp"){
        if (event.type == "keydown"){
                if (perso.vy < 0){} //personnage en chute, vitesse négative : il n'y a rien qui change
                else{
                    perso.vy = 1 //empêche de faire un double saut
                }
            }
        }
    }  

function process(){
    MovePerso(perso);
    render(perso); 
    window.requestAnimationFrame(process);
}

window.requestAnimationFrame(process);
document.addEventListener('keydown', callbackFunc);
document.addEventListener('keyup', callbackFunc);