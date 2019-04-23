import {
  sortByReleaseDate,
  sortByRating
} from './utils';

describe('Utils module', () => {

  describe('Sorting utils', () => {
    const movies = [
      {
        id: 218,
        title: 'The Terminator',
        release_date: '1984-10-26',
        vote_average: 7.4,
      },
      {
        id: 280,
        title: 'Terminator 2: Judgment Day',
        release_date: '1991-07-03',
        vote_average: 7.8,
      },
      {
        id: 296,
        title: 'Terminator 3: Rise of the Machines',
        release_date: '2003-07-02',
        vote_average: 5.9,
      }
    ];

    it('Should sort movies by release date', () => {
      const expected = [
        {
          id: 218,
          title: 'The Terminator',
          release_date: '1984-10-26',
          vote_average: 7.4,
        },
        {
          id: 280,
          title: 'Terminator 2: Judgment Day',
          release_date: '1991-07-03',
          vote_average: 7.8,
        },
        {
          id: 296,
          title: 'Terminator 3: Rise of the Machines',
          release_date: '2003-07-02',
          vote_average: 5.9,
        },
      ];

      const sortedMovies = sortByReleaseDate(movies);

      expect(sortedMovies).toEqual(expected);
    });

    it('Should sort movies by rating', () => {
      const expected = [
        {
          id: 280,
          title: 'Terminator 2: Judgment Day',
          release_date: '1991-07-03',
          vote_average: 7.8,
        },
        {
          id: 218,
          title: 'The Terminator',
          release_date: '1984-10-26',
          vote_average: 7.4,
        },
        {
          id: 296,
          title: 'Terminator 3: Rise of the Machines',
          release_date: '2003-07-02',
          vote_average: 5.9,
        },
      ];

      const sortedMovies = sortByRating(movies);

      expect(sortedMovies).toEqual(expected);
    });
  });
});
