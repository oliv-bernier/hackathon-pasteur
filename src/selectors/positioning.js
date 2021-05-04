const iconsClasses = [
  'one',
  'second',
  'third',
  'fourth',
  'fifth',
];

const shuffledPositioning = () => (
  iconsClasses
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
);

export default shuffledPositioning;
