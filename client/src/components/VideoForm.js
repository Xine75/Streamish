import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addVideo, getAllVideos } from "../modules/videoManager";

const VideoForm = () => {
    const emptyVideo = {
        title: "",
        description: "",
        url: ""
    };

    const [video, setVideo] = useState(emptyVideo);
    const history = useHistory();

    const handleInputChange = (e) => {
        const value = e.target.value;
        const key = e.target.id;

        const videoCopy = { ...video };

        videoCopy[key] = value;
        setVideo(videoCopy);
    };

    const handleSave = (evt) => {
        e.preventDefault();

        addVideo(video).then((p) => {
            // Navigate the user back to the home route
            history.push("/");
        });

    };

    return (
        <Form>
            <h2>New Video Form</h2>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="video title"
                    value={video.title}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="url">URL</Label>
                <Input type="text" name="url" id="url" placeholder="video link"
                    value={video.url}
                    onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="textarea" name="description" id="description"
                    value={video.description}
                    onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
    );
};

export default VideoForm;