// ! KUTUPHANE 1-KISIM
let game1=  {name: "GOD OF WAR" , buy: 55+" $" , ref: "1.4.REF" };
let game2=  {name: "GTA V" , buy: 20+" $" , ref: "5.2.REF"};
let game3=  {name: "RETHIDENT VII" , buy: 10+" $" , ref: "2.3.REF"};
let game4=  {name: "RUST" , buy: 30+" $" , ref: "4.5.REF"};
let game5=  {name: "UNCARTELD 5" , buy: 42+" $" , ref: "3.1.REF"};

let games = [game1,game2,game3,game4,game5,];

let ref11 = {cod: "1.1.REF" , show: false}
let ref12 = {cod: "1.2.REF" , show: false}
let ref13 = {cod: "1.3.REF" , show: false}
let ref14 = {cod: "1.4.REF" , show: false}
let ref15 = {cod: "1.5.REF" , show: false}

let ref21 = {cod: "2.1.REF" , show: false}
let ref22 = {cod: "2.2.REF" , show: false}
let ref23 = {cod: "2.3.REF" , show: false}
let ref24 = {cod: "2.4.REF" , show: false}
let ref25 = {cod: "2.5.REF" , show: false}

let ref31 = {cod: "3.1.REF" , show: false}
let ref32 = {cod: "3.2.REF" , show: false}
let ref33 = {cod: "3.3.REF" , show: false}
let ref34 = {cod: "3.4.REF" , show: false}
let ref35 = {cod: "3.5.REF" , show: false}

let ref41 = {cod: "4.1.REF" , show: false}
let ref42 = {cod: "4.2.REF" , show: false}
let ref43 = {cod: "4.3.REF" , show: false}
let ref44 = {cod: "4.4.REF" , show: false}
let ref45 = {cod: "4.5.REF" , show: false}

let ref51 = {cod: "5.1.REF" , show: false}
let ref52 = {cod: "5.2.REF" , show: false}
let ref53 = {cod: "5.3.REF" , show: false}
let ref54 = {cod: "5.4.REF" , show: false}
let ref55 = {cod: "5.5.REF" , show: false}

let refs = [
    [ref51, ref52, ref53, ref54, ref55],
    [ref41, ref42, ref43, ref44, ref45],
    [ref31, ref32, ref33, ref34, ref35],
    [ref21, ref22, ref23, ref24, ref25],
    [ref11, ref12, ref13, ref14, ref15],
];

// ! KITUBHANE 2-HISSE

function createRef(){
    console.clear();
    let order ="";
        for (let i = 0; i < refs.length; i++) {  
            for (let j = 0; j < 5; j++) {
                order += "|" + (refs[i][j].show ? refs[i][j].cod : "---") + "|";
                
            } 
            console.log(order)
            console.log("------------------------")
            order="";
    }
}

function codFind(gmaeName) {
    let refCod=null
    games.forEach(function(game) {
        if(game.name.toUpperCase().includes(gamesName.toUpperCase(),0)){
            refCod = game.ref;
        }
    })
    return refCod;
}

function showRef(refCod){
    for (let i = 0; i < refs.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (refs[i][j].cod==refCod) {
                refs[i][j].show=true;
                break;
            }
            
        }
        
    }
    
}
createRef();

let gamesName = prompt("Oyun ismini giriniz");
let refCod = codFind(gamesName)

showRef(refCod)
if (refCod!=null){
    showRef(refCod)
    createRef()
}
else{
    console.log("Daha eklenmemis oyun ismi : " +gamesName);
    
}