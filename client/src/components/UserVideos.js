import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Video from './Video';
import { getMyVideos } from "../modules/videoManager";

const UserList = () => {

    const [user, setUser] = useState({});
    const { id } = useParams();
    console.log("id", id)

    const getVideos = () => {
        getMyVideos(id).then(video => setUser(video));
    };

    useEffect(() => {
        getVideos();
    }, []);
    console.log("user", user)

    return (
        <div className="container">
            <div className="row justify-content-center">
                {user.videos.map((video) => (
                    <Video video={video} UserProfile={user} key={video.id} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
