import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Box,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Cardcontant from "../components/card";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const courses = [
  {
    id: 1,
    title: "Web Development for Beginners",
    instructor: "Ahmed Mohamed",
    duration: 30,
    level: "Beginner",
    category: "Web Development",
    rating: 4.8,
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/listening_-_R.png",
  },
  {
    id: 2,
    title: "Self Development Masterclass",
    instructor: "Ahmed Mohamed",
    duration: 30,
    level: "Beginner",
    category: "Self Development",
    rating: 4.8,
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Develop_-_R.png",
  },
  {
    id: 3,
    title: "Entrepreneurship Fundamentals",
    instructor: "Ahmed Mohamed",
    duration: 30,
    level: "Beginner",
    category: "Business & Entrepreneurship",
    rating: 4.8,
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Success_-_R.png",
  },
  {
    id: 4,
    title: "Advanced Web Development",
    instructor: "Ahmed Mohamed",
    duration: 30,
    level: "Intermediate",
    category: "Web Development",
    rating: 4.8,
    image:
      "https://edraak-marketing-uploads.edraak.org/Specializations/essentials_-_R.png",
  },
  {
    id: 5,
    title: "Mobile App Development",
    instructor: "Sarah Ali",
    duration: 45,
    level: "Intermediate",
    category: "Built Environment",
    rating: 4.5,
    image:
      "https://edraak-marketing-uploads.edraak.org/Specializations/The-Managers-Essential-Toolkit.jpg",
    tech: "reactnative",
  },
  {
    id: 6,
    title: "Artificial Intelligence Basics",
    instructor: "Khaled Ahmed",
    duration: 60,
    level: "Advanced",
    category: "Artificial Intelligence",
    rating: 4.9,
    image:
      "https://edraak-marketing-uploads.edraak.org/Specializations/Cyber-Security-Course1-1.jpg",
  },
  {
    id: 7,
    title: "Learn English Language",
    instructor: "Layla Mohamed",
    duration: 40,
    level: "Beginner",
    category: "Languages",
    rating: 4.7,
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Manage-a-Successful-Project1_1.jpg",
  },
];

const FilterButtons = ({ categories, selectedCategory, onSelectCategory }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerRef = useRef(null);

  const scrollToSelected = () => {
    if (containerRef.current) {
      const selectedButton = containerRef.current.querySelector(
        ".MuiButton-contained"
      );
      if (selectedButton) {
        selectedButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  useEffect(() => {
    scrollToSelected();
  }, [selectedCategory]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        overflowX: "auto",
        py: 1,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          gap: 1,
          px: 1,
          width: isMobile ? "max-content" : "100%",
          justifyContent: isMobile ? "flex-start" : "center",
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => onSelectCategory(category)}
            sx={{
              minWidth: "unset",
              px: isMobile ? 2 : 3,
              py: 1,
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              fontWeight: selectedCategory === category ? 600 : 500,
              borderRadius: "8px",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              "&.MuiButton-contained": {
                backgroundColor: "#1976d2",
                boxShadow: "0 2px 4px rgba(25, 118, 210, 0.3)",
                "&:hover": {
                  backgroundColor: "#1565c0",
                  boxShadow: "0 4px 8px rgba(21, 101, 192, 0.3)",
                },
              },
              "&.MuiButton-outlined": {
                borderColor: "#e0e0e0",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#1976d2",
                  color: "#1976d2",
                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                },
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllMobile, setShowAllMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isSmallMobile = useMediaQuery("(max-width:400px)");

  const categories = [
    "All",
    "Web Development",
    "Design",
    "Self Development",
    "Built Environment",
    "Languages",
    "Human Sciences",
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 4 } }}
      >
        <Box sx={{ mb: 6, px: { xs: 1, sm: 0 } }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "primary.main",
              fontWeight: 800,
              fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.75rem" },
              lineHeight: 1.3,
            }}
          >
            Start Learning for Free Now
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "1.3rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.125rem",
              },
              fontWeight: 800,
              lineHeight: 1.3,
              px: { xs: 1, sm: 0 },
            }}
          >
            Discover a wide range of over 300 courses, specially designed to
            meet your skills and interests!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <FilterButtons
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </Box>

        {filteredCourses.length === 0 ? (
          <Typography variant="h6" align="center" sx={{ py: 4 }}>
           No courses in this category
          </Typography>
        ) : (
          <Box sx={{ position: "relative" }}>
            {!isMobile && filteredCourses.length > 1 && (
              <>
                <IconButton
                  onClick={() => scroll("left")}
                  sx={{
                    position: "absolute",
                    left: { xs: -10, md: -20 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "background.paper",
                    },
                  }}
                >
                  <ChevronLeft fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={() => scroll("right")}
                  sx={{
                    position: "absolute",
                    right: { xs: -10, md: -20 },
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "background.paper",
                    },
                  }}
                >
                  <ChevronRight fontSize="large" />
                </IconButton>
              </>
            )}

            {isMobile && showAllMobile && filteredCourses.length > 1 && (
              <>
                <IconButton
                  onClick={() => scroll("left")}
                  sx={{
                    position: "absolute",
                    left: -10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "background.paper",
                    },
                  }}
                >
                  <ChevronLeft fontSize="large" />
                </IconButton>
                <IconButton
                  onClick={() => scroll("right")}
                  sx={{
                    position: "absolute",
                    right: -10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "background.paper",
                    },
                  }}
                >
                  <ChevronRight fontSize="large" />
                </IconButton>
              </>
            )}

            <Box
              ref={scrollContainerRef}
              sx={{
                display: "flex",
                gap: { xs: 2, sm: 3 },
                overflowX: isMobile && !showAllMobile ? "hidden" : "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
                py: 2,
                scrollBehavior: "smooth",
                flexDirection: "row",
                alignItems: "flex-start",
              }}
            >
              {isMobile && !showAllMobile ? (
                <Box
                  sx={{
                    width: isSmallMobile ? "100%" : 300,
                    flexShrink: 0,
                    px: 1,
                  }}
                >
                  <Cardcontant course={filteredCourses[0]} />
                </Box>
              ) : (
                filteredCourses.map((course) => (
                  <Box
                    key={course.id}
                    sx={{
                      width: isMobile ? (isSmallMobile ? "280px" : 300) : 350,
                      flexShrink: 0,
                      px: 1,
                    }}
                  >
                    <Cardcontant course={course} />
                  </Box>
                ))
              )}
            </Box>

            {isMobile && filteredCourses.length > 1 && (
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button
                  variant={showAllMobile ? "contained" : "outlined"}
                  onClick={() => setShowAllMobile(!showAllMobile)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: "1rem",
                    borderRadius: "50px",
                    width: isSmallMobile ? "100%" : "auto",
                    minWidth: 200,
                  }}
                >
                  {showAllMobile
                    ? "Show Less"
                    : `Show More (${filteredCourses.length - 1})`}
                </Button>
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: { xs: 5, md: 7 },
                px: 1,
              }}
            >
              <Button
                variant="contained"
                fullWidth={isSmallMobile}
                sx={{
                  textTransform: "none",
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #2196f3 90%)",
                  color: "#fff",
                  fontWeight: 600,
                  letterSpacing: 0.3,
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                  padding: { xs: "12px 24px", sm: "14px 28px" },
                  width: isSmallMobile ? "100%" : { xs: "300px", md: "350px" },
                  borderRadius: "50px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1565c0 0%, #1e88e5 90%)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Browse More Courses
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default CoursesPage;
