'use client'

import { MediaTitle, SearchQuery, SearchResults } from "@/components";
import React, { Suspense, useEffect, useState } from "react";

const getSearch = async (searchContext?: SearchContext) => {
  if (!searchContext?.title || searchContext.title.length < 3) {
    return {
      Search: [],
      totalResults: 0,
      Response: true
    } as SearchResult
  }

  const OMDBURI = new URL("http://www.omdbapi.com/")
  OMDBURI.searchParams.set("apikey", "72d44708")
  OMDBURI.searchParams.set('t', searchContext?.title)
  OMDBURI.searchParams.set('plot', 'short')
  if (searchContext?.type && searchContext.type != "any") {
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
  const [selectedTitle, setSelectedTitle] = useState<Media>()

  useEffect(() => {
    (async () => setSearchResult(await getSearch(searchContext)))()
  }, [searchContext]);

  return (
    <div className="w-screen h-screen grid gap-2 grid-cols-[320px_auto] grid-rows-[60px_auto]">
      <SearchQuery onSearch={setSearchContext} />
      <SearchResults results={searchResult} onSelect={setSelectedTitle} />
      <Suspense fallback={<div>Loading...</div>}>
        <MediaTitle mediaTitle={selectedTitle} />
      </Suspense>
    </div>
  );
}
