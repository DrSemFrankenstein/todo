// actions/postActions.js
import axios from "axios";
import { apiUrl } from "./apiConfig";

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";

// Action creators
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post,
});

export const deletePostSuccess = (postId) => ({
  type: DELETE_POST_SUCCESS,
  payload: postId,
});

// Async action creator using Thunk
export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(apiUrl);
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, post);
      dispatch(addPostSuccess(response.data));
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await axios.delete(apiUrl + `/${postId}`);
      dispatch(deletePostSuccess(postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
};
