export class Movie {
    movieId?: number;
    coverURL: string;
    description: string;
    duration: number;
    name: string;
    releaseDate: Date;
    trailerURL: any;
    languageId: number;
    statusId: number;
    theatreIds: any[];

    constructor(movie?: Movie) {
        Object.assign(this, movie);
    }
}
