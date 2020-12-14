const tweets = [
  {id: '000', likes: 5, tags: ['js', 'nodejs']},
  {id: '001', likes: 2, tags: ['html', 'css']},
  {id: '002', likes: 17, tags: ['html', 'js', 'nodejs']},
  {id: '003', likes: 8, tags: ['css', 'react']},
  {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];

// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
const tags = tweets.reduce((allTags, {tags}) => {
  // allTags.push(...tags);

  return allTags.concat(tags);
}, []).filter((tag, idx, tags) => tags.indexOf(tag) === idx);

console.log(tags);