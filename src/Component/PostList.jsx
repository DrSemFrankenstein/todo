// PostList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost } from "../Global/postActions";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const PostList = () => {
  const posts = useSelector((state) => state.post.posts); // Assuming `post` matches the key in your rootReducer
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <List>
      {posts.map((post) => (
        <ListItem key={post.id} divider>
          <ListItemText primary={post.title} />
          <ListItemSecondaryAction>
            <IconButton onClick={() => handleDeletePost(post.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
