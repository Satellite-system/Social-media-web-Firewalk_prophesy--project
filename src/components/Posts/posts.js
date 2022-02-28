import React from "react";
import Post from "./POST/post";
import useStyles from './styles.js';

const posts = () => {
    const classes = useStyles();
  return (
    <>
      <div>posts</div>
      <Post />
      <Post />
    </>
  );
};

export default posts;
