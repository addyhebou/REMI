const hygeineFlow = ['Brush & floss', 'Face wash & moistuizer', 'Sunscreen'];
const morning = [
  'Shower',
  ...hygeineFlow,
  'Condition & oil hair',
  'Gratitude journaling, Read 25+ pages of a book',
];
const evening = hygeineFlow;

export const getRoutine = (timeOfDay: string) => {
  if (timeOfDay.toLowerCase() === 'evening') return evening;
  return morning;
};
