const arr = [
  { name: "arun", age: 5 },
  { name: "arun", age: 7 },
  { name: "arun", age: 12 },
  { name: "arun", age: 9 },
  { name: "arun", age: 3 },
];

// reduce:
const totalAge = arr.reduce((prevAge, CurObj) => {
  // 0 + 5
  // 5 + 7
  // 12 + 12
  // 24 + 9
  // 33 + 3
  return prevAge + CurObj.age;
}, 0);

console.log(totalAge);
