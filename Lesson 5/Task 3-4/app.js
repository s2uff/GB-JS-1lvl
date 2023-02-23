"use strict";

let chessBoardContainer = document.querySelector(".chessBoard");
let boardLines = ["1", "2", "3", "4", "5", "6", "7", "8"];
let boardColumns = ["A", "B", "C", "D", "E", "F", "G", "H"];


function drawRowStartingWhite() {
    let tableRow ="<tr>"
    for (let m = 0; m < 8; m++) {
        if (m % 2 === 1) {
            tableRow += '<td class="whitePole"></td>';
        } else {
            tableRow += '<td class="blackPole"></td>';
        }
    }
    return tableRow;
}

function drawRowStartingBlack() {
    let tableRow ="<tr>"
    for (let m = 0; m < 8; m++) {
        if (m % 2 === 0) {
            tableRow += '<td class="whitePole"></td>';
        } else {
            tableRow += '<td class="blackPole"></td>';
        }
    }
    return tableRow;
}

function drawColumnsNames() {
    let tableRow ="<tr>"
    for (let k = 0; k < 8; k++) {
        tableRow += `<td class="lineName">${boardColumns[k]}</td>`;
    }
    return tableRow + "</tr>";
}

function drawAllBoard () {
    let tableBoard = "<table>";
    for (let j = 0; j < 8; j++) {
        if (j % 2 === 0) {
            tableBoard += drawRowStartingBlack() + `<td class="lineName">${boardLines[j]}` + "</tr>";
        } else {
            tableBoard += drawRowStartingWhite() + `<td class="lineName">${boardLines[j]}` + "</tr>";
        }
    }
    tableBoard += drawColumnsNames();
    return tableBoard + "</table>";
}

chessBoardContainer.insertAdjacentHTML("afterbegin", drawAllBoard());
let td = document.querySelectorAll("td");

function placeFigures(td) {
    for (let h = 0; h <= 80; h++){
        if (h === 0 || h === 7) {
            td[h].innerHTML = "&#9814;";
        }
        if (h === 1 || h === 6) {
            td[h].innerHTML = "&#9816;";
        }
        if (h === 2 || h === 5) {
            td[h].innerHTML = "&#9815;";
        }
        if (h === 3) {
            td[h].innerHTML = "&#9813;";
        }
        if (h === 4) {
            td[h].innerHTML = "&#9812;";
        }
        if (h === 9 || h === 10 || h === 11 || h === 12 || h === 13 || h === 14 || h === 15 || h === 16) {
            td[h].innerHTML = "&#9817;";
        }
        if (h === 54 || h === 55 || h === 56 || h === 57 || h === 58 || h === 59 || h === 60 || h === 61) {
            td[h].innerHTML = "&#9823;";
        }
        if (h === 66) {
            td[h].innerHTML = "&#9818;";
        }
        if (h === 67) {
            td[h].innerHTML = "&#9819;";
        }
        if (h === 65 || h === 68) {
            td[h].innerHTML = "&#9821;";
        }
        if (h === 64 || h === 69) {
            td[h].innerHTML = "&#9822;";
        }
        if (h === 63 || h === 70) {
            td[h].innerHTML = "&#9820;";
        }
    }
}

placeFigures(td);

