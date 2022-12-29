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

const recordingArtistGoals: Goals = {
  OKRs: {
    'Private Vocal lessons': [
      'Find strong, highly educated teacher',
      'Hyper focus on tone',
      'Sing for an hour daily',
      'Invest in soundproofing studio for at-home practice',
      'Look for practice rooms in music schools',
      'Copy 4-6 of your favorite singers: The Weeknd, Justin Bieber, Bryson Tiller, Frank Ocean, Drake, The Kid Laroi',
      'Memorize practice material',
      'Experiment with different voices each fav singer uses to build your arsenal',
    ],
  },
};

const propertyMogulGoals: Goals = {
  OKRs: {
    'Rent or AirBnB a Quadplex in LA': [
      'Setup with NACA',
      'Look up 5 properties per week: Zillow, Realtor, Trulia, Foreclosure, Apartments',
      "Find a good real estate agent if you can't find a property by March",
      'Do tours in neighborhoods',
      'Look toward college areas – Westwood (UCLA), South Central (USC)',
      'Browse on FB groups and Craigslist',
    ],
  },
};

export const goalTable = {
  CEO: { goals: CEOGoals, color: '#AFD8EF' },
  'Super Producer': { goals: superProducerGoals, color: '#F5C293' },
  'Content Creator': { goals: contentCreatorGoals, color: '#FBEC9D' },
  'Property Mogul': { goals: propertyMogulGoals, color: '#C0EFAF' },
  'Recording Artist': { goals: recordingArtistGoals, color: '#FECFF4' },
};
