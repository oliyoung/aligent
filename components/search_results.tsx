interface SearchResultsParams {
    onSelect: (arg: any) => void
    results?: SearchResult
}

interface SearchResultParams {
    mediaTitle: Media;
    onClick: (result: Media) => void
}

const SearchResult = ({ mediaTitle, onClick }: SearchResultParams) => {
    return <a
        data-testid={`searchResult_${mediaTitle.imdbID}`}
        onClick={() => onClick(mediaTitle)}
        className="grid grid-rows-1 grid-cols-[60px_auto] gap-2 py-4 cursor-pointer hover:bg-zinc-50 px-2">
        <div className="bg-zinc-100">
            {mediaTitle.Poster != "N/A" && <img src={mediaTitle.Poster} alt={mediaTitle.Title} className="aspect-square" />}
        </div>
        <div className="col-start-2 align-start">
            <h3 className="text-sm">{mediaTitle.Title}</h3>
            <h6 className="text-xs">{mediaTitle.Year}</h6>
        </div>
    </a>
}

const SearchResultCount = ({ results }: { results?: SearchResult }) => {
    if (!results?.totalResults || results?.totalResults === 0) {
        return <></>
    }
    return <h2 data-testid="searchResult_results" className="text-xs uppercase">{results?.totalResults} results</h2>
}

const SearchResults = ({ onSelect, results }: SearchResultsParams) => {
    return <div className="overflow-y-visible p-8 flex flex-col gap-12">
        <SearchResultCount results={results} />
        <div className="flex flex-col divide-y divide-solid">
            {results?.Search?.map((result, index) =>
                <SearchResult onClick={onSelect} mediaTitle={result} key={index} />
            )}
        </div>
    </div>
}

export default SearchResults;