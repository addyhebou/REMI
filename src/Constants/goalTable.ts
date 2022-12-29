interface Goals {
  OKRs: Object;
}

const contentCreatorGoals: Goals = {
  OKRs: {
    '100k on Tik Tok, 20k on Instagram': [
      'Post 1+ Instagram video weekly',
      'Post 2+ Tik Tok videos weekly',
      'Throw 3+ Build a Beat contests',
    ],
    'Instagram Verification': [
      'Get the username saintsteph',
      'Get verification from application',
    ],
  },
};
const CEOGoals: Goals = {
  OKRs: { 'Earn $10,000': [] },
};
const superProducerGoals: Goals = {
  OKRs: {
    '100+ projects': [
      'Mentor Under Tommy Brown',
      'Know 5 high status promoters, 5 high status DJs',
      'Throw 1+ Writing Camps',
    ],
    'Produce for 5+ Major Artists': [],
  },
};
const singerGoals: Goals = {
  OKRs: { 'Vocal lessons': [] },
};
const propertyMogulGoals: Goals = {
  OKRs: { 'Rent or AirBnB a Quadplex': [] },
};

export const goalTable = {
  CEO: { goals: CEOGoals, color: '#AFD8EF' },
  'Super Producer': { goals: superProducerGoals, color: '#F5C293' },
  'Content Creator': { goals: contentCreatorGoals, color: '#FBEC9D' },
  'Property Mogul': { goals: propertyMogulGoals, color: '#C0EFAF' },
  Singer: { goals: singerGoals, color: '#FECFF4' },
};
