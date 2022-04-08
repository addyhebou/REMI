const hygeineFlow = ['Brush & floss', 'Face wash & moistuizer', 'Sunscreen'];
const morning = [
  'Shower',
  ...hygeineFlow,
  'Gratitude journaling, Read 25+ pages of a book',
];
const evening = hygeineFlow;

const getRoutine = (timeOfDay) => {
  if (timeOfDay.toLowerCase() === 'evening') return evening;
  return morning;
};

module.exports.getRoutine = getRoutine;
