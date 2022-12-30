export interface Exercise {
  title: string;
  description: string;
  imageURL: string;
  impact: string;
  activityLevel: number;
}

const ideasToHit: Exercise = {
  title: 'Idea To Hit',
  description: 'Practice converting acapellas into fully produced pop tracks',
  imageURL: 'https://cdn-icons-png.flaticon.com/512/5219/5219836.png',
  impact: 'Increases my end-to-end production conversion rate',
  activityLevel: 10,
};

const sampleMaking: Exercise = {
  title: 'Sample Maker',
  description:
    'Learning and making flippable samples of traditional folk music around the world.',
  imageURL:
    'https://secure.webtoolhub.com/static/resources/icons/set45/c10e017b.png',
  impact:
    'Increase chances for hip-hop placements; creates space for fun pop hooks',
  activityLevel: 6,
};

const remakes: Exercise = {
  title: 'Remake Top Songs',
  description: 'Remaking favorite and hit songs',
  imageURL:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Toicon-icon-fandom-build.svg/1200px-Toicon-icon-fandom-build.svg.png',
  impact: 'Increases diversity',
  activityLevel: 8,
};

const hitStudy: Exercise = {
  title: 'Hit Study',
  description: 'Studying stems of hit songs',
  imageURL:
    'https://static.vecteezy.com/system/resources/previews/004/753/004/original/case-study-icon-shadowed-detailed-case-study-logo-free-vector.jpg',
  impact: 'Learn the styles of several producers',
  activityLevel: 3,
};

const instrumentEssentials: Exercise = {
  title: 'Instrument Essentials',
  description: 'Practicing the essentials: voice, piano, guitar',
  imageURL:
    'https://banner2.cleanpng.com/20201130/usw/transparent-night-party-icon-guitar-icon-5fc522c738d132.4967128116067550152327.jpg',
  impact: 'Increases foundational theory, diversity',
  activityLevel: 5,
};

const liveStreams: Exercise = {
  title: 'Consume Live Steams',
  description: 'Watch live streams of top producers',
  imageURL:
    'https://img.freepik.com/premium-vector/live-stream-logo-live-streaming-icon-live-broadcasting-button_349999-639.jpg',
  impact: 'Learn the styles of several producers',
  activityLevel: 1,
};

const mentee: Exercise = {
  title: 'Mentee',
  description: 'Mentee under a top producer',
  imageURL:
    'https://iconarchive.com/download/i108932/google/noto-emoji-people-profession/10210-man-student-medium-dark-skin-tone.ico',
  impact:
    'Learn the style of a top producer, work in circles with top creatives',
  activityLevel: 6,
};

export const CraftExercises: Array<Exercise> = [
  ideasToHit,
  sampleMaking,
  remakes,
  hitStudy,
  mentee,
  liveStreams,
  instrumentEssentials,
];
