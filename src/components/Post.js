import { useNavigate, useParams } from "react-router";
import "../css/Post.css";
import React, { useState } from "react";
import { usePost } from "../hooks/usePost";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "./Loading";
import { motion } from "framer-motion";

const Post = (props) => {
  const [showComments, setShowComments] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();
  const { error, loading, data } = usePost(id);
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error...</div>;

  return (
    <div className="Post">
      <header className="UserDetails">
        <a onClick={() => navigate(-1)} href="#">
          <FaArrowLeft style={{ transform: "translateY(5px)" }} /> Go back
        </a>
        <h1>{data.post.user.name}</h1>
        <a style={{ opacity: 0 }}></a>
      </header>
      <motion.div
        className="PostTile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>{data.post.title}</h2>
        <p>{data.post.body}</p>
      </motion.div>
      <motion.div
        className="Comments"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setShowComments((prevState) => !prevState)}
          className="left"
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        <button
          onClick={(e) => props.showModal(e.target.id)}
          id="comment"
          className="right"
        >
          Add Comment
        </button>
        {showComments && (
          <div className="CommentList">
            {data.post.comments.data.map((comment, i) => (
              <motion.div
                key={comment.id}
                className="comment"
                initial={{ opacity: 0, translateX: 50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <header>
                  <h4>{comment.name}</h4>
                  <i>{comment.email}</i>
                </header>

                <p>{comment.body}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Post;
