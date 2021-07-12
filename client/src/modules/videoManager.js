const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getAllVideosWithComments = () => {
    return fetch(`${baseUrl}/GetWithComments`)
        .then((res) => res.json())
};

export const getVideo = (id) => {
    return fetch(`${baseUrl}/commentDetail/${id}`).then((res) => res.json());
};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

export const searchVideos = (searchTerms) => {
    return fetch(`${baseUrl}/search?q=${searchTerms}`)
        .then((res) => res.json())
};

export const getMyVideos = (id) => {
    return fetch(`/api/UserProfile/myVideos/${id}`)
        .then((res) => res.json())
}
