const { TikTokTags, IGTags } = require('../Constants/tags');

const getCaption = (platform, song, numOfSounds) => {
  if (platform === 'IG')
    return `You only need ${numOfSounds} sounds for ${song}!!\n🔶\n🔶\n ${IGTags}`;
  return `You only need ${numOfSounds} sounds!! ${TikTokTags} #${artist} #${songName}`;
};

module.exports.getCaption = getCaption;
