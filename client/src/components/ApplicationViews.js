import React from "react";
import { Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import UserList from "./UserVideos";

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <VideoList />
            </Route>

            <Route path="/videos/add">
                <VideoForm />
            </Route>

            <Route path="/video/commentDetail/:id">
                <VideoDetails />
            </Route>

            <Route path="/userprofile/myvideos/:id">
                <UserList />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;
