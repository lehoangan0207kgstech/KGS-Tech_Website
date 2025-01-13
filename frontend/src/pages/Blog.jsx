import React, { useState } from "react";
import PageDownUp from "../components/PageDownUp";
import BlogMain from "../components/BlogMain";

const Blog = () => {
  return (
    <div>
      <PageDownUp sections={["frame"]} />
      <BlogMain />
      <div id="frame" />
    </div>
  );
};

export default Blog;
