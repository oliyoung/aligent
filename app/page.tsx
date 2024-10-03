'use client'

import { MediaTitle, SearchQuery, SearchResults } from "@/components";
import React, { Suspense, useEffect, useState } from "react";

const getSearch = async (searchContext?: SearchContext) => {
  if (!searchContext?.title) {
    return {} as SearchResult
  }

  const OMDBURI = new URL("http://www.omdbapi.com/")
  OMDBURI.searchParams.set("apikey", "72d44708")
  OMDBURI.searchParams.set('s', searchContext?.title)
  if (searchContext?.type) {
    OMDBURI.searchParams.set('type', searchContext.type)
  }
  if (searchContext?.year) {
    OMDBURI.searchParams.set('y', searchContext.year)
  }
  const data = await fetch(OMDBURI.href)
  return await data.json() as SearchResult
}

export default function Home() {
  const [searchContext, setSearchContext] = useState<SearchContext>()
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const [selectedTitle, setSelectedTitle] = useState()

  useEffect(() => {
    (async () => setSearchResult(await getSearch(searchContext)))()
  }, [searchContext]);

  return (
    <div className="xl:container md:mx-auto grid-container">
      <SearchQuery onSearch={setSearchContext} />
      <SearchResults results={searchResult} onSelect={setSelectedTitle} />
      <Suspense fallback={<div>Loading...</div>}>
        {selectedTitle && <MediaTitle mediaTitle={selectedTitle} />}
      </Suspense>
    </div>
  );
}
