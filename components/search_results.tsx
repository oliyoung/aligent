interface SearchResultsParams {
    onSelect: (arg: any) => void
    results?: SearchResult
}

interface SearchResultParams {
    mediaTitle: Media;
    onClick: (result: Media) => void
}

const SearchResult = ({ mediaTitle, onClick }: SearchResultParams) => {
    return <button onClick={() => onClick(mediaTitle)} className="grid grid-rows-1 grid-cols-[60px_auto] gap-2">
        {mediaTitle.Poster != "N/A" && <img src={mediaTitle.Poster} alt={mediaTitle.Title} className="aspect-square" />}
        <div className="col-start-2 align-start">
            <h3 className="text-sm">{mediaTitle.Title}</h3>
            <h6 className="text-xs">{mediaTitle.Year}</h6>
        </div>
    </button>
}

const SearchResults = ({ onSelect, results }: SearchResultsParams) => {
    return <div className="h-100 overflow-y-visible overflow-y-visible p-8">
        {results?.totalResults && results?.totalResults > 0 && <h2 className="text-xs uppercase pb-12">{results?.totalResults} results</h2>}
        <div className="flex flex-col gap-4 divide-x">
            {results?.Search?.map((result, index) =>
                <SearchResult onClick={onSelect} mediaTitle={result} key={index} />
            )}
        </div>
    </div>
}

export default SearchResults;