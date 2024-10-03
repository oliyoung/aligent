
interface Rating {
    Source?: string;
    Value?: string;
}

interface Media {
    Title?: string;
    Year?: string;
    Rated?: string;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director?: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Poster?: string;
    Ratings?: Rating[];
    Metascore?: string;
    imdbRating?: string;
    imdbVotes?: string;
    imdbID?: string;
    Type?: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
    Response?: string;
}

interface SearchResult {
    Search: Media[];
    totalResults: number;
    Response: boolean
}

interface SearchContext {
    title?: string;
    year?: string;
    type?: 'any' | 'movies' | 'series' | 'episodes';
    results: SearchResult
}
