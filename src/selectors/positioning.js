const classes = [
  'one',
  'second',
  'third',
  'fourth',
  'fifth',
];

const iconsClasses = [];

for (let i = 0; i < 5; i++) {
  const randomClass = classes[Math.floor(Math.random() * classes.length)];
  if (randomClass !== iconsClasses) {
    iconsClasses.push(randomClass);
  }
}

console.log(iconsClasses);

export default iconsClasses;

// for (let i = 0; i < 5; i++) {
//   const randomClass = classes[Math.floor(Math.random() * classes.length)];
//   if (iconsClasses.find((item) => item !== randomClass)) {
//     iconsClasses.push(randomClass);
//   }
// }
