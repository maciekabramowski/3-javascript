'use strict';

//Number

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

//String

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + "\\  \n" + premiaStr;

console.log(calkowitaWyplataStr);

var imieStudenta = " Maciek  ";
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());

imieStudenta = imieStudenta.trim();
console.log(imieStudenta);


var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
    console.log("Jest smog");
} else {
    console.log("Nie ma smogu");
}

//Array

var imiona = new Array();
var imionaStudentów = new Array(9);
var imionaChlopakow = new Array('Mateusz', 'Michał', 'Krzysiek', 'Sergio');

imionaStudentów[2] = "Przemek";

console.log(imiona);
console.log(imionaStudentów);
console.log(imionaChlopakow);


var wiek = [];
var wiekStudentow = [20, 25, 28];

console.log(wiek);
console.log(wiekStudentow);








