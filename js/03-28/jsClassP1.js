//for in사용해서 아래 object 프린트

const article = {
  num: 1,
  title: "A",
  reply: [
    { num: 3, title: "A-3" },
    { num: 2, title: "A-2" },
    { num: 1, title: "A-1" },
  ],
};
for (item in article) {
  let type = typeof article[item];

  if (type === "object") {
    /*     article[item].forEach((item) => console.log(item)); */
    article[item].map((item) => console.log(item));
  } else {
    console.log(article[item]);
  }
}

//bathroom 삭제하고 animal 추가
const house = {
  bathroom: 1,
  room: 2,
  address: ["제주도", "제주시", "연동"],
  persons: [{ name: "kim" }, { name: "lee" }],
};

// bathroom 속성 삭제
delete house.bathroom;

// animal 속성 추가
house.animal = ["개", "고양이"];

console.log(house);

//class getter setter 사용해서 age가 음수면 0으로 저장

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    age > 0 ? (this._age = age) : (this._age = 0);
  }
}
const people = new User("steve", "jobs", -1);
console.log(people.age);

for (value of article) {
  console.log(value);
}
