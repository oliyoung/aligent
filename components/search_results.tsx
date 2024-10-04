interface SearchResultsParams {
    onSelect: (arg: any) => void
    results?: SearchResult
}

interface SearchResultParams {
    media: Media;
    onClick: (result: Media) => void
}

const IronMan = {
    "Title": "Iron Man",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "02 May 2008",
    "Runtime": "126 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jon Favreau",
    "Writer": "Mark Fergus, Hawk Ostby, Art Marcum",
    "Actors": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
    "Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "Language": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
    "Country": "United States, Canada",
    "Awards": "Nominated for 2 Oscars. 24 wins & 73 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "94%"
        },
        {
            "Source": "Metacritic",
            "Value": "79/100"
        }
    ],
    "Metascore": "79",
    "imdbRating": "7.9",
    "imdbVotes": "1,142,498",
    "imdbID": "tt0371746",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$319,034,126",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}

const SearchResult = ({ media, onClick }: SearchResultParams) => {
    return <button onClick={() => onClick(media)} className="grid grid-rows-1 grid-cols-[60px_auto] gap-2">
        <img src={media.Poster} alt={media.Title} className="aspect-square " />
        <div className="col-start-2 align-start">
            <h3 className="text-sm">{media.Title}</h3>
            <h6 className="text-xs">{media.Year}</h6>
        </div>
    </button>
}

const SearchResults = ({ onSelect }: SearchResultsParams) => {
    const results = {
        totalResults: 10,
        Search: [IronMan, IronMan, IronMan, IronMan, IronMan, IronMan, IronMan, IronMan, IronMan]
    }

    return <div className="h-100 overflow-y-visible overflow-y-visible p-8">
        {results?.totalResults && results?.totalResults > 0 && <h2 className="text-xs uppercase pb-12">{results?.totalResults} results</h2>}
        <div className="flex flex-col gap-4 divide-x">
            {results?.Search?.map((result, index) =>
                <SearchResult onClick={onSelect} media={result} key={index} />
            )}
        </div>
    </div>
}

export default SearchResults;