import React from 'react';
import { shallow } from 'enzyme';
import PreviewItem from './PreviewItem';

describe('PreviewItem', () => {

  it('Renders correctly', () => {
    const testMovie = {
      budget: 100000000,
      genres: ["Action", "Thriller", "Science Fiction"],
      id: 280,
      overview: "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
      poster_path: "https://image.tmdb.org/t/p/w500/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg",
      release_date: "1991-07-03",
      revenue: 520000000,
      runtime: 137,
      tagline: "It's nothing personal.",
      title: "Terminator 2: Judgment Day",
      vote_average: 7.8,
      vote_count: 5108,
    };


    const component = shallow( <PreviewItem movie={testMovie}></PreviewItem>);

    expect(component).toMatchSnapshot();
  });
});


