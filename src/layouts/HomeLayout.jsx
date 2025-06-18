import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CoursesPage from "../pages/coursespage";
import Spichilazetion from "../pages/spichilazetionpage";
import FevoretCourse from "../pages/fevoretcoursepage";
import InputSearsh from "../pages/inputsearsh";
import StudentPage from "../pages/studentpage";
import GradientDivider from "../components/ultimate/divider";
import Header from "../components/ultimate/header";
import HomePage from "../pages/homepage";
import Footer from "../components/ultimate/footer";
import LoadingBook from "../components/loading/loadingbook";

const HomeLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); 
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingBook />;
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}>
      <Header />
      
      <Box component="main" sx={{ flex: 1, py: 4 }}>
        <HomePage />
        
        <CoursesPage />
        
        <Spichilazetion />
        
        <InputSearsh />
        
        <FevoretCourse />
        
        <StudentPage />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default HomeLayout;