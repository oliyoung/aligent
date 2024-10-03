
interface MediaTitleParams {
    mediaTitle: Media
}

const MediaTitle = ({ mediaTitle }: MediaTitleParams) => {
    return mediaTitle.Title
}

export default MediaTitle;
