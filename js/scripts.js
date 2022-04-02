const squaresContainer = document.querySelector(".squares-container");
const squaresSubContainer = document.createElement('div')
const squares = document.createElement('div')
let lastArea = 16;


function squareGenerator (numberOfSquares) {
    lastArea = numberOfSquares;
    let num = 640 / numberOfSquares - 1 + 'px';
    while (squaresContainer.firstChild) {
        squaresContainer.removeChild(squaresContainer.firstChild);
    }
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
    squaresColor = document.querySelectorAll(".just-the-square");
    squaresColor.forEach(item=>{item.addEventListener('mouseover', ()=>item.setAttribute('style', `height:${num};width:${num};background-color:${currentColor()}`))});
}

function currentColor (){
    let color = document.querySelector(".picker").value;
    return color;
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', ()=>squareGenerator(lastArea));

const range = document.querySelector('.range');
const size = document.querySelector('.size');
size.addEventListener('click', ()=>squareGenerator(range.value));

const colorButton = document.querySelector('.color');
//colorButton.addEventListener('click', ()=>/*add function here */);

let squaresColor = document.querySelectorAll(".just-the-square");
squaresColor.forEach(item=>{item.addEventListener('click', () => {console.log(1)})});










document.addEventListener('DOMContentLoaded', () => squareGenerator(16));