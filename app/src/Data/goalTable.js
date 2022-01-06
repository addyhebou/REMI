const techGoals = {
  'Read 10+ startup books': ['Smart Goal', []],
  'Master PERN stack': ['Smart Goal', []],
  'Release No. 1 and music DB app': ['Smart Goal', []],
  'CS degree': ['Smart Goal', ['study', 'go to class']],
  'Expand REMI': ['Smart Goal', []],
};

const musicGoals = {
  '100k on IG and Tik Tok': ['Smart Goal', []],
  'Mentor for top 40 producer': ['Smart Goal', []],
  'Work on 100+ projects': ['Smart Goal', []],
  'Produce for 5+ major artists': ['Smart Goal', []],
  'Master my tech': ['Smart Goal', []],
};
const performanceGoals = {
  'Become a solid top-liner': ['Smart Goal', []],
  'Develop a unique dance style': ['Smart Goal', []],
  'Strongly train as an actor': ['Smart Goal', []],
};
const personalGoals = {
  'Develop a solid morning + night routine': ['Smart Goal', []],
  'Bulk 20 Pounds': ['Smart Goal', []],
  'Be mindful': ['Smart Goal', []],
  '4 Years with Miina': ['Smart Goal', []],
  'Stay sexy': ['Smart Goal', []],
};
const financialGoals = {
  'Max streams of income': ['Smart Goal', []],
  'Be frugal, not cheap': ['Smart Goal', []],
  'Read 20+ real estate/personal finance books': ['Smart Goal', []],
  'Buy a house': ['Smart Goal', []],
};

const categories = [
  'Tech Entrepreneur',
  'Critically Acclaimed',
  'Music Creator',
  'Financial Freedom',
  'Personal Goals',
];

module.exports.categories = categories;

const goalTable = {
  'Tech Entrepreneur': [Object.keys(techGoals), '#AFD8EF', techGoals],
  'Critically Acclaimed': [
    Object.keys(performanceGoals),
    '#F59393',
    performanceGoals,
  ],
  'Music Creator': [Object.keys(musicGoals), '#EBBD87', musicGoals],
  'Financial Freedom': [Object.keys(financialGoals), '#C0EFAF', financialGoals],
  'Personal Goals': [Object.keys(personalGoals), '#D1A9D4', personalGoals],
};
module.exports.goalTable = goalTable;
