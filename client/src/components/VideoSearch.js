import React, { useEffect, useState } from "react";
import { searchVideos } from "../modules/videoManager";

export const VideoSearch = (props) => {

    const findVideos = (value) => {
        searchVideos(value)
            .then(videos => props.setVideos(videos));
    };

    return (
        <>
            Search Videos:
            <input type="text" className="input--wide"
                onChange={(e) => findVideos(e.target.value)}

                placeholder="Search for a Video..." />
        </>
    )

};
export default VideoSearch;