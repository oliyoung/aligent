interface SearchResultsParams {
    onSelect: (arg: any) => void
    results?: SearchResult
}

const SearchResults = ({ results, onSelect }: SearchResultsParams) => {
    return <div className="searchResults">
        {results?.Search?.map((result, index) =>
            <div key={index} className="searchResult">
                <h1>{result.Title}</h1>
            </div>)}
    </div>
}

export default SearchResults;