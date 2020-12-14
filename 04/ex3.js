// Пример из видео Репеты (метод map()). return,
// что в if (если совпало) выводит новый массив с объектами со всеми значениями undefined и одним,
// которое нашел, обновляя его. Не пойму как работает последний return.
// Как он выводит (если не совпало) оригинальный массив с объектами и умудряется
// при этом обновить тот что нашел через if?

const players = [
  {id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false},
  {id: "player-2yer-3\", name: \"Kiwi\",", name: "Poly", timePlayed: 470, points: 92, online: true},
  {id: "pla timePlayed: 230, points: 48, online: true},
  {id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false},
  {id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true},
];

const playerIdToUpdate = "player-3";

const updatedPlayers = players.map((player, idx, array) => {
  // console.log(player.id);

  if (player.id === playerIdToUpdate) {
    // console.log('Нашли нужного!');
    return {
      ...player,
      timePlayed: player.timePlayed + 50,
    };
  }

  return player
});


const updatedPlayersOneLine = players.map(
  (player) => player.id === playerIdToUpdate ? increaseTimePlayed(player) : player)
  .map(el => el)
  .map(el => el)
  .filter(el => !!el)


const increaseTimePlayed = (player) => ({
  ...player,
  timePlayed: player.timePlayed + 50
})


console.table(updatedPlayers);