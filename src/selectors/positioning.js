const iconsClasses = [
  'one',
  'second',
  'third',
  'fourth',
  'fifth',
];

const shuffledPositioning = iconsClasses
  .map((a) => ({ sort: Math.random(), value: a }))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value);

export default shuffledPositioning;

// const iconsClasses = [];

// for (let i = 0; i < 5; i++) {
//   const randomClass = classes[Math.floor(Math.random() * classes.length)];
//   if (randomClass[i] !== iconsClasses) {
//     iconsClasses.push(randomClass);
//   }
// }

// console.log(iconsClasses);

// export default iconsClasses;

// for (let i = 0; i < 5; i++) {
//   const randomClass = classes[Math.floor(Math.random() * classes.length)];
//   if (iconsClasses.find((item) => item !== randomClass)) {
//     iconsClasses.push(randomClass);
//   }
// }
