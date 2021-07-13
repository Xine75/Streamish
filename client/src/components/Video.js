import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Video = ({ video }) => {

    return (
        <Card >
            <p className="text-left px-2">Posted by:
                <Link to={`/userprofile/myvideos/${video.userProfile.id}`}>
                    {video.userProfile.name}</Link></p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <Link to={`/video/commentDetail/${video.id}`}>
                        <strong>{video.title}</strong>
                    </Link>
                </p>
                <p>{video.description}</p>
                <p>{video.comments?.map(c => c.message)}</p>
            </CardBody>
        </Card>
    );
};

export default Video;
