
interface MediaTitleParams {
    mediaTitle?: Media
}

const MediaTitle = ({ mediaTitle }: MediaTitleParams) => {
    if (!mediaTitle) {
        return <></>
    }
    return <div id="mediaTitle" className="max-h-0 grid row-span-9 col-span-2 col-start-2 divide-y">
        <div className="text-sm grid gap-4 grid-cols-[300px_auto] grid-rows-[1fr_min-content_min-content] grid-rows-3 py-4">
            <img
                className="row-span-3 row-start-1 col-start-1"
                src={mediaTitle.Poster}
                alt={mediaTitle.Poster} />
            <h1 className="text-4xl row-start-1 self-end">{mediaTitle.Title}</h1>
            <div className="flex flex-row row-start-2 flex flex-row gap-1">
                <div id="rating" className="border-radius border rounded px-2 py-1">{mediaTitle.Rated}</div>
                <ul className="flex flex-row gap-4 px-4 self-center">
                    <li id="year">{mediaTitle.Year}</li>
                    <li id="genre">{mediaTitle.Genre}</li>
                    <li id="runtime">{mediaTitle.Runtime}</li>
                </ul>
            </div>
            <div className="row-start-3" id="actors">{mediaTitle.Actors}</div>
        </div>
        <div id="plot" className="py-4">{mediaTitle.Plot}</div>
        <div id="ratings" className="basis-auto flex flex-row divide-x py-4">
            {mediaTitle.Ratings?.map((rating, index) =>
                <div className="rating flex-1 text-center px-8 flex flex-col gap-1" key={index}>
                    <div>{rating.Value}</div>
                    <h6 className="text-xs">{rating.Source}</h6>
                </div>)}
        </div>
    </div>
}

export default MediaTitle;
