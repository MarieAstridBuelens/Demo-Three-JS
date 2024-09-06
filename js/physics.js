function MovePerso(perso) {
    perso.x += perso.vx;
    perso.y += perso.vy;

    if (perso.y >= 10){
        perso.vy = -1
    }
    if (perso.y <=0){
        perso.vy = 0
        perso.y =0
    }
}

export {MovePerso}