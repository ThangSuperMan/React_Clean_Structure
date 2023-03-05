import React from "react";
import { getComment } from "#api";
// import { getLikes } from "#api";

const Comment = () => {
  getComment(2);
  return <div>Comment</div>;
};

export default Comment;
