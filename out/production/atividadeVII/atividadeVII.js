if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'atividadeVII'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'atividadeVII'.");
}var atividadeVII = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  function main() {
    handleCoordinates();
    handleButtonEvent();
  }
  function handleCoordinates$lambda(closure$xCoord, closure$yCoord) {
    return function (it) {
      ensureNotNull(closure$xCoord).innerHTML = 'Coordenada x: ' + toString(window.xCoordinate);
      ensureNotNull(closure$yCoord).innerHTML = 'Coordenada x: ' + toString(window.yCoordinate);
      return Unit;
    };
  }
  function handleCoordinates() {
    var xCoord = document.getElementById('x-coord');
    var yCoord = document.getElementById('y-coord');
    var body = document.getElementById('body');
    ensureNotNull(body).addEventListener('click', handleCoordinates$lambda(xCoord, yCoord));
  }
  function handleButtonEvent$lambda(closure$botao01, closure$textfield) {
    return function (it) {
      ensureNotNull(closure$textfield).textContent = closure$botao01.textContent;
      return Unit;
    };
  }
  function handleButtonEvent() {
    var botao01 = document.getElementById('botao01');
    var textfield = document.getElementById('textfield');
    ensureNotNull(botao01).addEventListener('click', handleButtonEvent$lambda(botao01, textfield));
  }
  _.main = main;
  _.handleCoordinates = handleCoordinates;
  _.handleButtonEvent = handleButtonEvent;
  main();
  Kotlin.defineModule('atividadeVII', _);
  return _;
}(typeof atividadeVII === 'undefined' ? {} : atividadeVII, kotlin);
