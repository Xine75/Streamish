import React, { useEffect, useState } from "react";
import { searchVideos } from "../modules/videoManager";

export const VideoSearch = () => {
    const [videos, setVideos] = useState([]);
    const [searchTerms, setSearchTerms] = useState([]);

    const findVideos = () => {
        searchVideos()
            .then(videos => setVideos(videos));
    };

    useEffect(() => {
        findVideos(searchTerms);
    }, [videos]);

    return (
        <>
            Search Videos:
            <input type="text" className="input--wide"
                onKeyUp={(e) => setSearchTerms(e.target.value)}


                placeholder="Search for a Video..." />
        </>
    )
};
export default VideoSearch;