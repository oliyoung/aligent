import { useEffect, useState } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface SearchQueryParams {
    onSearch: (searchContext: SearchContext) => void
}

const YEAR_START = 1902
const YEAR_END = new Date().getFullYear()

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

    return <div data-testid="searchQuery" className="bg-zinc-500 col-span-3 col-start-1 grid grid-cols-4 content-center">
        <div data-testid="searchQuery_Title" className=" col-span-2 flex flex-row px-4 items-center min-w-full gap-2 ">
            <MagnifyingGlassIcon width={15} height={15} className="text-white fill-white stroke-white" />
            <input name='title' onChange={onChange} className="w-full text-white bg-zinc-500 p-2 focus:outline-none focus:ring-none focus:border-none" type="search" />
        </div>
        <div data-testid="searchQuery_Year" className="text-white">
            <h6 className="text-xs uppercase">{'year'}</h6>
            <div className="flex flex-row gap-4">
                <input
                    max={YEAR_END}
                    min={YEAR_START}
                    name="year"
                    onChange={onChange}
                    type="range"
                    value={searchContext.year}
                />
                <span className="text-xs">{searchContext.year}</span>
            </div>
        </div>
        <div data-testid="searchQuery_Type" className="text-white">
            <h6 className="text-xs uppercase">{'type'}</h6>
            <div className="flex flex-row gap-4">
                {queryTypes.map(queryType => <div key={queryType} className="inline-flex items-center gap-1">
                    <label className="relative flex items-center cursor-pointer">
                        <input data-testid={`${queryType}_type`} name="type" onChange={onChange} type='radio' value={queryType} defaultChecked={queryType === 'any'} className="peer h-3 w-3 cursor-pointer appearance-none rounded-full border border-zinc-300 checked:border-zinc-300 transition-all" />
                        <span className="absolute bg-zinc-300 w-2 h-2 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        </span>
                    </label>
                    <span className="inline-block capitalize text-xs">{queryType}</span>
                </div>)}
            </div>
        </div>
    </div>
}

export default SearchQuery;