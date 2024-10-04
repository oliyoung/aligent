export class OMBDAPI {
    api: URL;

    constructor() {
        this.api = new URL(process.env.NEXT_PUBLIC_OMDB_URI!)
        this.api.searchParams.set("apikey", process.env.NEXT_PUBLIC_OMDB_API_KEY!)
    }

    async get(partialMediaTitle: MediaSearchResult) {
        if (!partialMediaTitle?.imdbID) {
            return {
                Search: [],
                totalResults: 0,
                Response: true
            } as SearchResult
        }
        this.api.searchParams.set('i', partialMediaTitle?.imdbID)
        this.api.searchParams.set('plot', 'short')
        return this.fetch()
    }


    async search(searchContext: SearchContext): Promise<SearchResult> {
        if (!searchContext?.title || searchContext.title.length < 3) {
            return {
                Search: [],
                totalResults: 0,
                Response: true
            } as SearchResult
        }
        this.api.searchParams.set('s', searchContext?.title)
        if (searchContext?.type && searchContext.type != "any") {
            this.api.searchParams.set('type', searchContext.type)
        }
        if (searchContext?.year) {
            this.api.searchParams.set('y', searchContext.year)
        }
        return this.fetch()
    }

    private async fetch() {
        const data = await fetch(this.api.href)
        const json = await data.json()
        return json;
    }
}