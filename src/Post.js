import React from "react";

const Post = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h3", {}, props.title),
        React.createElement("img", {}, props.image),
        React.createElement("p", {}, props.description),
    ]);
};

export default Post;
