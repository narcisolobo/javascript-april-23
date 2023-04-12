// COMMON JS IMPORT SYNTAX
const { faker } = require('@faker-js/faker');

class Band {
  constructor() {
    const adjective = this.titleCase(faker.word.adjective());
    const nouns = this.titleCase(faker.word.noun()) + 's';

    this._id = faker.database.mongodbObjectId();
    this.name = `The ${adjective} ${nouns}`;
    this.genre = faker.music.genre();
    this.studioAlbums = faker.random.numeric();
    this.topHits = [
      faker.music.songName(),
      faker.music.songName(),
      faker.music.songName(),
    ];
  }

  titleCase(str = '') {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

const bands = [new Band(), new Band(), new Band(), new Band(), new Band()];

// COMMON JS EXPORT
module.exports = { Band, bands };
