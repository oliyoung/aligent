'use client'

import { MediaTitle, SearchQuery, SearchResults } from "@/components";
import { OMBDAPI } from "@/lib/omdb";
import React, { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [searchContext, setSearchContext] = useState<SearchContext>({})
  const [searchResult, setSearchResult] = useState<SearchResult>();
  const [selectedTitle, setSelectedTitle] = useState<MediaSearchResult>()

  useEffect(() => {
    (async () => {
      const search = await new OMBDAPI().search(searchContext)
      setSearchResult(search)
    })()
  }, [searchContext]);

  return (
    <div className="w-screen h-screen grid grid-cols-[320px_auto] grid-rows-[60px_auto]">
      <SearchQuery onSearch={setSearchContext} />
      <SearchResults results={searchResult} onSelect={setSelectedTitle} />
      <Suspense fallback={<div>Loading...</div>}>
        {selectedTitle && <MediaTitle partialMediaTitle={selectedTitle} />}
      </Suspense>
    </div>
  );
}
