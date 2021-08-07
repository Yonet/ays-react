import React from "react";
import ReactDOM from "react-dom";

import Post from "./Post";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello World!"),
    React.createElement(Post, {
      title: "Post 1",
      img: "http://placehold.it/300x200",
      description: "Some image!",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
