let fecha1 = new Date();
let tiempo1 = fecha1.getTime();
let nombre = prompt("Ingrese el nombre:");
let apellido1 = prompt("Ingrese el primer apellido:");
let apellido2 = prompt("Ingrese el segundo apellido:");
let fecha2 = new Date();
let tiempo2 = fecha2.getTime();
let tiempoTotal = (tiempo2 - tiempo1) / 1000;
tiempoTotal = tiempoTotal.toFixed(1);
document.write(`En introducir ${nombre} ${apellido1} ${apellido2} ha tardado ${tiempoTotal} segundos.`);