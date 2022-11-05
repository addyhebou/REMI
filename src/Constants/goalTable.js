// SMART GOAL: Specific, Measurable, Attainable, Relevant, Time-bound

/*
 * Data model for goals array
const categoryGoals = {
  'Task' : ['SMART Goal' (str), [Steps to achieve](str arr)] (2)
}
 */
const techGoals = {
  'Complete Tommy Brown App': [
    'Complete the main page and blocking mobile page',
    [],
  ],
};

const musicGoals = {
  '100k on IG and Tik Tok': [
    'Get 100k on IG and Tik Tok',
    [
      'Follow mentor',
      'Post Instagram video weekly',
      'Post Tik Tok Videos twice a week',
      'Throw contests',
      'Master my tech',
      'Focus on 3 Series: You Only Need X Sounds (Mistiq angle), Orchestral Hip Hop Beats (Tracklib ad angle), Original Beats (Look Mum No Drums angle)',
    ],
  ],
  'Mentor for top 40 producer': [
    'Mentor under a Top 40 producer',
    [
      'Build portfolio',
      'Go through every contact I possible can to reach them',
      'Release 10 And The Writer Is Infographics',
      'Tommy Brown: Build the Champagne Therapy web app',
    ],
  ],
  'Work on 100+ projects': [
    'Work on 100+ projects by hitting at 6-10 projects a month',
    ['Pitch demos made from type beat tutorials', 'Send out guitar melodies'],
  ],
  'Produce for 5+ major artists': [
    'Produce for 5+ major artists',
    ['Follow mentor', 'Send out guitar melodies'],
  ],
  'Lock in my sound': [
    'Develop a unique sound only recognizable for Saint Steph',
    [
      'Remake The Weeknd albums: Dawn FM, After Hours, Beauty Behind the Madness',
      'Excessive notes',
      'Make type beats based on remakes',
      'Develop unique danceable drum patterns w unique drum sounds',
    ],
  ],
};
const performanceGoals = {
  'Become a solid top-liner': [
    'Become a fire pop singer',
    ['Train with a contemporary vocal teacher'],
  ],
};
const personalGoals = {
  'Develop a solid morning + night routine': [
    'Smart Goal',
    [
      'Wake up 2+ hours before your first appointment',
      'Hygiene flow: Brush & floss, face wash & moistuizer, sunscreen, hair routine',
      'Morning: Hygeine flow, gratitude journaling, gym (only on no morning classes), shower',
      'Night: Hygiene flow',
    ],
  ],
  'Bulk 20 Pounds': [
    'Clean bulk 20 pounds of muscle',
    [
      'No more candy (only monthly)',
      'Intake 2800 calories a day (body weight * 16)',
      'Fuel up with 40/30/30 protein/carbs/fats daily',
      'Consume 87.5 grams of protein daily (half of body weight) in 4 meals',
      'Skip processed foods',
      '4 Days of strength training (chest, back, leg, chest)',
      'Go for 8-15 reps in full - more reps is better than higher weights',
      'Try some drop sets',
      '1-2 days of cardio',
      'Track progress every 4 weeks: body fat percentage, circumference measurements, and weight',
      'Sleep 7-8 hours a night',
    ],
  ],
  'Be mindful': ['Smart Goal', []],
  '4 Years with Miina': ['Smart Goal', []],
  'Stay sexy': [
    "Maintain a 'dress-to-impress' lifestyle",
    [
      'Daily hygeine flow',
      'Hair: braided, low temp fade, goatee beard',
      'Fragrance: Deodorant and cologne',
      'Clothes: Shiny jewelry and accessories, fresh clothes',
      'Hats: beanies, newsboys, baseball caps, bucket hat, wide Fedora hats',
      'Shirts: button-down dress shirts, cuban collar, denim shirt',
      'Jeans: Dark blue jeans, chino pants (khaki or grey), sweatpants',
      'Shoes: Chelsea boots, minimal Vans sneakers (brown, white, grey, black), brown Brogue, Suede chukka, Oxford Derby, brown leather service boot',
    ],
  ],
};

const financialGoals = {
  'Max streams of income': [
    'Earn $250,000+',
    [
      'Primary: Job - $180,000',
      'Business: Custom beats – $25,000 (or 8 $250 beats / month)',
      'Rental: Subleasing - $10,000',
      'Dividend: Index Funds',
    ],
  ],
  'Be frugal, not cheap': [
    'Spend 50% of what was spent in December 2021',
    [
      'Bi-weekly statement reviews',
      'Meal planning',
      'Cook in bulk',
      'Stop eating out',
      'Rent library books',
      'Shop at Marshalls, Ross, and Burlington',
      'Grocery shop with an inventory of your current load',
    ],
  ],
  'Digest 20+ real estate/personal finance books': [
    'Digest 10+ tech startup books by September 15',
    [
      'Rent out library books',
      'Take notes',
      "Read other people's notes and reviews",
      'Put wagers of the books after 3 weeks (give up $50)',
      'Go for 1.5+ books / month',
    ],
  ],
  'Buy a house': [
    'Save at least $3200 for first month and security',
    ['Get the relocation bonus', "Take notes from JP's role model"],
  ],
  'High Credit Score': [
    'Earn a 750+ credit score',
    ['Clear out credit card every Sunday - keep below 30% usage'],
  ],
};

export const goalTable = {
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
