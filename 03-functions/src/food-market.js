

const obj = { foo: 123 };

const func = function(obj) {
  obj = { foo: 5 };
}

func();

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

console.log(i);