// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input
// и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число. Функция создает столько div, сколько указано в amount
//  и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" class="amount" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>
// <div id="boxes" />

const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('.amount');
const root = document.getElementById('boxes');

const defaultSize = 30;

function createBoxes(amount) {
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    const dimension = defaultSize + 10 * i;

    // создаются divы
  }

  root.append(...result);
}

function destroyBoxes() {}

render.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount !== amount) {
    console.error(`Amount is not a number "${amount}"`);
    return;
  }

  createBoxes(amount);
});

destroy.addEventListener('click', () => {
  destroyBoxes();
})