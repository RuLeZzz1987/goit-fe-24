const tweets = [
  {id: '000', likes: 5, tags: ['js', 'nodejs']},
  {id: '001', likes: 2, tags: ['html', 'css']},
  {id: '002', likes: 17, tags: ['html', 'js', 'nodejs']},
  {id: '003', likes: 8, tags: ['css', 'react']},
  {id: '004', likes: 0, tags: ['js', 'nodejs', 'react']},
];

const number = [432, 1, 2, 11111, 1232, 10]

tweets.slice().sort(({likes: likesA}, {likes: likesB}) => likesB - likesA).reverse();

number.sort();

console.log(tweets)