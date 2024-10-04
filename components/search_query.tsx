import { useEffect, useState } from "react"

interface SearchQueryParams {
    onSearch: (searchContext: SearchContext) => void
}

const TRIP_TO_THE_MOON_RELEASE = 1902

const SearchQuery = ({ onSearch }: SearchQueryParams) => {

    const queryTypes: SearchQueryTypeStrings[] = [
        "any", "movie", "series", "episode"
    ]

    const [searchContext, setSearchContext] = useState<SearchContext>({
        title: '',
        type: "any",
        year: '2000'
    })

    const onChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        setSearchContext((previousSearchContext: SearchContext) => ({
            ...previousSearchContext, [name]: value
        }))
    }

    useEffect(() => {
        onSearch(searchContext)
    }, [searchContext]);

    return <div id="searchQuery" className="bg-zinc-500 col-span-3 col-start-1 grid grid-cols-4">
        <input className="text-white bg-zinc-500 p-2 col-span-2" type="search" id="searchQuery_Title" name='title' onChange={onChange} />
        <div id="searchQuery_Year" className="text-white">
            <h6 className="text-xs uppercase">{'year'}</h6>
            {searchContext.year}
            <input
                max={new Date().getFullYear()}
                min={TRIP_TO_THE_MOON_RELEASE}
                name="year"
                onChange={onChange}
                type="range"
                value={searchContext.year}
            />
        </div>
        <div id="searchQuery_Type" className="text-white">
            <h6 className="text-xs uppercase">{'type'}</h6>
            <div className="flex flex-row gap-3">
                {queryTypes.map(queryType => {
                    return <label className="text-xs capitalize" key={queryType}>
                        <input className="bg-zinc-500" onChange={onChange} type='radio' name="type" value={queryType} />
                        {queryType}
                    </label>
                })}
            </div>
        </div>
    </div>
}

export default SearchQuery;