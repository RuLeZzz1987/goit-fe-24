const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значаение которого укажем 0.
const likes = tweets.reduce((totalLikes, { likes }) => totalLikes + likes, 0);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = tweets =>
  tweets.reduce((totalLikes, {likes}) => totalLikes + likes, 0);

console.log(countLikes(tweets)); // 32
