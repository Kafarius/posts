import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate, useParams } from "react-router";
import "../css/User.css";
import { Link } from "react-router-dom";
import { FaAngleRight, FaArrowLeft, FaPlus, FaTrash } from "react-icons/fa";
import Loading from "./Loading";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const User = (props) => {
  let navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useUser(id);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (data) {
      setPosts(data.user.posts.data);
    }
  }, [data]);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  const deletePost = (id) => {
    const filteredPosts = [...posts].filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  return (
    <div className="UserDetails">
      <header>
        <a onClick={() => navigate(-1)} href="#">
          <FaArrowLeft style={{ transform: "translateY(5px)" }} /> Go back
        </a>
        <h1>{data.user.name}</h1>
        <a onClick={(e) => props.showModal(e.target.id)} id="post" href="#">
          Add Post <FaPlus style={{ transform: "translateY(5px)" }} />
        </a>
      </header>
      <h2 className="postsTitle">List of Posts</h2>
      <div className="postList">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="post"
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div
              onClick={() => deletePost(post.id)}
              href="#"
              className="linkLeft"
            >
              <FaTrash style={{ transform: "translateY(5px)" }} />
            </div>
            <Link to={`/${id}/${post.id}`} className="postLink">
              {post.title}
            </Link>
            <div className="linkRight">
              <FaAngleRight style={{ transform: "translateY(5px)" }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default User;
