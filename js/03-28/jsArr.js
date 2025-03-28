const max = (arr) => {
  let output = 0;

  for (value of arr) {
    if (value > output) {
      output = value;
    }
  }
  return output;
};
console.log(max([100, 1, 2, 250, 3, 4]));

const array = [1, 2, 3, 4, 5];
const lastItem = array[array.length - 1];
const firstItem = array[0];

array.pop(); //1234
array.shift(); //234
array.unshift(lastItem); //5234
array.push(firstItem);

console.log(array);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 90),
];

const res = students.find((item) => {
  return item.score === 90;
});
console.log(res);

const res2 = students.filter((item) => item.enrolled);
console.log(res2);

const res3 = students.some((item) => item.score < 50);
console.log("50점 미만이 있으면 true 없으면 false -> " + res3);
