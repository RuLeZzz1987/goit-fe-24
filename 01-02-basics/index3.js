/*
* Подскажите, что тут пожалуйста, они все вроде подходят :|
Функция обратного вызова это...
• функция, возвращаемая при вызове другой функции
• функция, переданная в другую функцию в качестве аргумента
• функция, вызываемая в теле другой функции
* */


// • функция, возвращаемая при вызове другой функции
function external() {
  return function internal () {}
}

/**
 * функция, переданная в другую функцию в качестве аргумента
 *
 * @param {Function} fnParam
 * */
function outer(fnParam) {
  fnParam();
}

// функция, вызываемая в теле другой функции
function other() {
  external();
}

function setupAuto() {
  return function driveAuto() {
    console.log('drive');
  }
}

const readyToUseAuto = setupAuto();

readyToUseAuto()