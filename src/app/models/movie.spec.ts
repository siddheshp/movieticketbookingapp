import { Movie } from './movie';

//test suite
describe('Movie', () => {
  //Arrange
  let movie: Movie = null;

  //initialize for every test case
  beforeEach(()=>{
    movie = new Movie();
  });

  //unit test case
  it('should create a Movie instance', () => {
    //Assert
    expect(movie).not.toBeNull();
  });

  //test case
  it('should create movie with details', () =>{
    //Arrange
    movie = new Movie({
      coverURL: 'http://fsdhjf',
      description: 'Bond movie',
      duration: 130,
      name: 'No Time to Die',
      releaseDate: new Date(2020, 11, 12),
      trailerURL: 'url',
      languageId: 1,
      statusId: 2,
      theatreIds: [1, 2]
    });

    //Assert
    expect(movie.name).toBe('No Time to Die');
  });
});
