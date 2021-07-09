import React, { useContext, useState } from "react";
import { VideoSearch } from "../modules/videoManager";

export const VideoSearch = () => {
    const [videos, setVideos] = useState([]);
    const { setSearchTerms } = useState();

    const searchVideos = () => {
        VideoSearch().then(videos => setVideos(videos));
    };

    useEffect(() => {
        searchVideos();
    }, []);

    return (
        <>
            Search Videos:
            <input type="text" className="input--wide"
                onKeyUp={(e) => setSearchTerms(e.target.value)}


                placeholder="Search for a Video..." />


        </>
    )

}