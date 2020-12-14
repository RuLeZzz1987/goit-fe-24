const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: {text: 'White and Black Long Fur Cat', label: 'bla'}
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: {text: 'Orange and White Koi Fish Near Yellow Koi Fish', label: 'ok'},
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: {text: 'Group of Horses Running', label: 'ne ok'},
  },
];

const itemElementList = images.forEach(createImage);


function createImage(image) {
  const {url: link = 'https://images.pexels.com/blank', alt, ...rest} = image;
  console.log(link);
  console.log(alt.text, alt.label);
}