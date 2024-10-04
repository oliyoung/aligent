
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

type MediaSearchResult = Pick<Media, 'Title' | 'Year' | 'imdbID' | 'Type' | 'Poster'>;

interface SearchResult {
    Search?: MediaSearchResult[];
    totalResults?: number;
    Response: boolean;
    Error?: string;
}

enum SearchQueryType {
    any = 'any',
    movie = 'movie',
    series = 'series',
    episode = 'episode',
}

type SearchQueryTypeStrings = keyof typeof SearchQueryType;

interface SearchContext {
    title?: string;
    year?: string;
    type?: SearchQueryTypeStrings;
}
