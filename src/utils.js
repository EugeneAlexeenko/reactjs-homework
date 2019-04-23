export const sortByReleaseDate = movies => {
  return movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
};

export const sortByRating = movies => {
  return movies.sort((a, b) => b.vote_average - a.vote_average);
};
