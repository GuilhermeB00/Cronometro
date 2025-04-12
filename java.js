// script.js
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function atualizarDisplay() {
  let s = segundos < 10 ? "0" + segundos : segundos;
  let m = minutos < 10 ? "0" + minutos : minutos;
  let h = horas < 10 ? "0" + horas : horas;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    atualizarDisplay();
  }, 1000);
}

function pause() {
  clearInterval(intervalo);
}

function reset() {
  clearInterval(intervalo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
}