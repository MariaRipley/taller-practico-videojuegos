'use strict';

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementSize;;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize () {
    //Responsive, pero hay que actualizar al cambiar de tamaño, por eso usamos resize en el listener
    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    //Divide el tamaño de la cuadrícula en 10
    elementSize = (canvasSize / 10) - 1.5;

    startGame();
};

function startGame () {
    console.log({canvasSize, elementSize});

    game.font = elementSize + 'px Verdana';
    game.textAlign = '';

    const map = maps[2];
    //Para recorrer el mapa sin espacios y separando las filas por salto de línea
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log({map, mapRows, mapRowCols});

    for (let row = 1; row <= 10; row++) {
        for (let col = 0; col < 10; col++) {
            game.fillText(emojis[mapRowCols[row-1][col]], elementSize * col, elementSize * row);
        }
    };
};