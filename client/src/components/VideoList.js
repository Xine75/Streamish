import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideosWithComments } from "../modules/videoManager";
import VideoSearch from "./VideoSearch";
import VideoForm from "./VideoForm";

const VideoList = () => {

    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        getAllVideosWithComments().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <VideoSearch setVideos={setVideos} />
                <VideoForm />
                {videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default VideoList;
