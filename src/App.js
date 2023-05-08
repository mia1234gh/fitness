import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import ExerciseDetail from "./pages/exerciseDetail";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
