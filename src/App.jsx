import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import HomeLayout from "./layouts/HomeLayout";
import CourseDetails from "./pages/coursedetails";
import SignInPage from "./pages/Sign.log-page/signin";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
