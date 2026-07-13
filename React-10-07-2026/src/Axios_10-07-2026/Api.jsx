import api from "./axios";

// GET
export const getPosts = () => api.get("/posts");

// POST
export const addPost = (data) => api.post("/posts", data);

// PUT
export const updatePost = (id, data) =>
  api.put(`/posts/${id}`, data);

// PATCH
export const patchPost = (id, data) =>
  api.patch(`/posts/${id}`, data);

// DELETE
export const deletePost = (id) =>
  api.delete(`/posts/${id}`);