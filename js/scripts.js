const squaresContainer = document.querySelector(".squares-container");
const squaresSubContainer = document.createElement('div')
const squares = document.createElement('div')

function squareGenerator (numberOfSquares) {
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
            squaresSubContainer.appendChild(squares).setAttribute('style', `height:${num};width:${num};`);
        }

    }
}