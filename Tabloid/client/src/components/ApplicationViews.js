import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import TagList from "./TagList";
import PostDetails from "./PostDetails";
import CategoryAddForm from "./CategoryAddForm";
import TagAddForm from "./TagAddForm";
import CategoryEditForm from "./CategoryEditForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Category">
            <Route index element={isLoggedIn ? <CategoryList /> : <Navigate to="/login" />} />
            <Route path="Add" element={<CategoryAddForm />} />
            <Route path="Edit/:id" element={<CategoryEditForm />} />
          </Route>
          <Route path="Tag">
            <Route index element={isLoggedIn ? <TagList /> : <Navigate to="/login" />} />
            <Route path="Add" element={<TagAddForm />} />
          </Route>
          <Route path="Post">
            <Route index element={<PostList />} />
            <Route path=":id" element={<PostDetails />} />
          </Route>
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};