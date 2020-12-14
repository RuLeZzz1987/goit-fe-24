// 1. Объект как параметр без ДП
let object = {num: 2, neOk: 'ne ok', fail: false}

function getNum(obj) {
  return obj.fail ? obj.num : obj.neOk;
}

console.log(getNum(object)) // 2

// 2. ДП
object = {num: 2, ok: 'ne ok', fail: false}
// const num  =  object.num;
const {num} = object;
console.log(num) // 2

// 3. Объект как параметр c ДП
object = {num: 2, ok: 'ne ok', fail: false}

//function getNum (obj) { return obj.num; }
function getNum({fail, num: OtherNum = 400, neOk}) {
  // const {fail, num, neOk} = obj;
  // var fail = obj.fail;
  // var num = obj.num;
  // var neOk = obj.neOk;
  return fail ? OtherNum : neOk;
}

console.log(getNum(object)) // 2