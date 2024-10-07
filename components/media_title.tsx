import { useEffect, useState } from "react"
import { OMBDAPI } from "@/lib/omdb";
import Wishlist from "@/components/wishlist";

interface MediaTitleParams {
    mediaSearchResult: MediaSearchResult
}

const MediaTitle = ({ mediaSearchResult }: MediaTitleParams) => {
    const [mediaTitle, setMediaTitle] = useState<Media>(mediaSearchResult)

    useEffect(() => {
        (async () => {
            const mediaTitle = await new OMBDAPI().get(mediaSearchResult)
            setMediaTitle(mediaTitle)
        })()
    }, [mediaSearchResult]);

    if (!mediaTitle) {
        return <></>
    }

    return <div data-testid="mediaTitle_mediaTitle" className="row-span-9 col-span-2 col-start-2 relative">
        {mediaTitle.imdbID && <Wishlist imdbID={mediaTitle.imdbID} />}
        <div className="grid divide-y">
            <div className="text-sm grid gap-4 grid-cols-[300px_auto] grid-rows-[1fr_min-content_min-content] grid-rows-3 py-4">
                {mediaTitle?.Poster != "N/A" && <img
                    data-testid="mediaTitle_poster"
                    className="row-span-3 row-start-1 col-start-1"
                    src={mediaTitle.Poster}
                    alt={mediaTitle.Poster} />}
                <h1 data-testid="mediaTitle_title" className="text-4xl row-start-1 self-end">{mediaTitle.Title}</h1>
                <div className="flex flex-row row-start-2 flex flex-row gap-1">
                    <div data-testid="mediaTitle_rating" className="border-radius border rounded px-2 py-1">{mediaTitle.Rated}</div>
                    <ul className="flex flex-row gap-4 px-4 self-center">
                        <li data-testid="mediaTitle_year">{mediaTitle.Year}</li>
                        <li data-testid="mediaTitle_genre">{mediaTitle.Genre}</li>
                        <li data-testid="mediaTitle_runtime">{mediaTitle.Runtime}</li>
                    </ul>
                </div>
                <div className="row-start-3" data-testid="mediaTitle_actors">{mediaTitle.Actors}</div>
            </div>
            <div data-testid="mediaTitle_plot" className="py-4">{mediaTitle.Plot}</div>
            <div data-testid="mediaTitle_ratings" className="basis-auto flex flex-row divide-x py-4">
                {mediaTitle.Ratings?.map((rating, index) =>
                    <div className="rating flex-1 text-center px-8 flex flex-col gap-1" key={index}>
                        <div>{rating.Value}</div>
                        <h6 className="text-xs">{rating.Source}</h6>
                    </div>)}
            </div>
        </div>
    </div>
}

export default MediaTitle;
