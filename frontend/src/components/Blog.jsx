import React from "react";
const Blog = ({ name, image, description, time }) => {
  return (
    <div className="blog">
      <div id="fullBlogPage"></div>
      <img src={image} alt="BlogImage" />
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Blog;
