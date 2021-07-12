import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from './Video';
import { getMyVideos } from "../modules/videoManager";

const UserList = () => {

    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    console.log("id", id)

    const getVideos = () => {
        getMyVideos(id).then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {videos?.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
