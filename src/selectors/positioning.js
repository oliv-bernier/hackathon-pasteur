const shuffledPositioning = (icons) => {
  const iconsClasses = [
    'one',
    'second',
    'third',
    'fourth',
    'fifth',
  ];

  const shuffled = iconsClasses
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  const shuffledIcons = icons.map((icon, index) => {
    icon.class = shuffled[index];
    return icons;
  });

  return shuffledIcons;
};

export default shuffledPositioning;
