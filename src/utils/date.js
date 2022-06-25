function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

const now = new Date();
let date = new Date(now.getMonth() - 1); 
// export const nowDate = addZero(addZero(date.getDate()) + '-' + addZero(date.getMonth() + 1) + '-' + date.getFullYear());

console.log(date);

