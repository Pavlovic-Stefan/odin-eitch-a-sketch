const squaresContainer = document.querySelector(".squares-container");
const squaresSubContainer = document.createElement('div')
const squares = document.createElement('div')
let lastArea = 16;
let er = 0;
let rain = 0;
let colorStep = 25;
let red = 250;
let green = 0 - colorStep;
let blue = 0;
let r = 0;
let g = 0;
let b = 0;
let mouseState = false;

function squareGenerator (numberOfSquares) {
    lastArea = numberOfSquares;
    let num = 640 / numberOfSquares - 1 + 'px';
    // clears previously existing grid
    while (squaresContainer.firstChild) {
        squaresContainer.removeChild(squaresContainer.firstChild);
    }
    // generates grid of wanted size with proper classes assigned
    squaresContainer.classList.add('squares-container-border')
    for (let i = 0 ; i < numberOfSquares ; i++) {
        const squaresSubContainer = document.createElement('div')
        squaresContainer.appendChild(squaresSubContainer);
        for (let j = 0 ; j < numberOfSquares ; j++) {
            const squares = document.createElement('div');
            squaresSubContainer.appendChild(squares).setAttribute('style', `height:${num};width:${num};`)
            squaresSubContainer.appendChild(squares).classList.add('just-the-square');
        }
    }
    window.onmousedown = (event) => {
        mouseState = true;
        eventTargetEvent(event, num);
    }
    window.onmouseup = () => mouseState = false;
    squaresContainer.onmouseover = (event) => eventTargetEvent(event, num);
};

function eventTargetEvent(event, num){
    let hoverTarget = event.target.closest('.just-the-square');
    if (hoverTarget == null || hoverTarget.classList != 'just-the-square'){
        return
    } else {
        if (mouseState){
            hoverTarget.setAttribute('style', `height:${num};width:${num};background-color:${currentColor()}`);
        }
    }    
}

function currentColor (){
    let color = document.querySelector(".picker").value;
    if (er==1){
        return '#ffffff';        
    }
    if (red>=250){
        r=1;
    } else if (red<=0){
        r=0;
    }
    if (green>=250){
        g=1;
    } else if (green<=0){
        g=0;
    }
    if (blue>=250){
        b=1;
    } else if (blue<=0){
        b=0;
    }

    if ( r==1 && b==0 && g==0){green+=colorStep}
    else if (r==1 && g==1){red-=colorStep}
    else if (r==0 && g==1 && b==0){blue+=colorStep}
    else if (g==1 && b==1){green-=colorStep}
    else if (g==0 && b==1 && r==0){red+=colorStep}
    else if (r==1 && b==1){blue-=colorStep}


    if (rain==1){
        return `rgb(${red}, ${green}, ${blue})`;
    }
    return color;
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>squareGenerator(lastArea));

const range = document.querySelector('.range');
const size = document.querySelector('.size');
size.addEventListener('click', ()=>squareGenerator(range.value));

const colorButton = document.querySelector('.color');
colorButton.addEventListener('click', ()=>{er=0; rain=0});

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', ()=>{er=1; rain=0});

const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', ()=>{rain=1; er=0});








document.addEventListener('DOMContentLoaded', () => squareGenerator(16));