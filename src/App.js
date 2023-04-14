import React, { useState } from "react";
import "./styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
import { FoodItems, UserForm } from "./pages";
import Layout from "./pages/Layout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<UserForm />} />
        <Route path="/foodlist" element={<FoodItems />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
