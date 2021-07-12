import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from './Video';
import { getAllVideosWithComments } from "../modules/videoManager";
import VideoSearch from "./VideoSearch";
import VideoForm from "./VideoForm";

const VideoList = () => {

    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    var userVideos = videos.filter(v => v.userProfileId.toString() === id)

    const getVideos = () => {
        getAllVideosWithComments().then(videos => setVideos(userVideos));
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
