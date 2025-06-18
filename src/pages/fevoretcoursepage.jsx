import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import Cardcontant from "../components/card";

const Fevoretcourse = [
  {
    id: 1,
    title: "Web Development for Beginners",
    instructor: "Ahmed Mohamed",
    duration: 30,
    level: "Beginner",
    category: "Web Development",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Athat-cover.jpg",
  },
  {
    id: 2,
    title: "Learn Artificial Intelligence",
    instructor: "Sarah Ali",
    duration: 45,
    level: "Intermediate",
    category: "Artificial Intelligence",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Digitalization-cover_1.png",
  },
  {
    id: 3,
    title: "Graphic Design Fundamentals",
    instructor: "Khaled Hassan",
    duration: 20,
    level: "Beginner",
    category: "Design",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Creative-Cover.jpg",
  },
  {
    id: 4,
    title: "Graphic Design Fundamentals",
    instructor: "Khaled Hassan",
    duration: 20,
    level: "Beginner",
    category: "Design",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Decision-Making-in-the-Business-World.jpg",
  },
  {
    id: 5,
    title: "Graphic Design Fundamentals",
    instructor: "Khaled Hassan",
    duration: 20,
    level: "Beginner",
    category: "Design",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/listening_-_R.png",
  },
];

const FevoretCoursePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isSmallMobile = useMediaQuery("(max-width:400px)");

  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = isMobile ? (isSmallMobile ? 280 : 300) : 350;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * (cardWidth + (isMobile ? 16 : 24)),
        behavior: "smooth",
      });
    }
  }, [currentIndex, isMobile, isSmallMobile]);

  const scrollToNext = () => {
    setCurrentIndex((prev) =>
      prev === Fevoretcourse.length - 1 ? 0 : prev + 1
    );
  };

  const scrollToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Fevoretcourse.length - 1 : prev - 1
    );
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) setCurrentIndex(0);
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Most Popular Courses
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 1,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: "800",
          }}
        >
          {" "}
          Discover top courses that enhance your skills and boost your career,
          carefully designed to provide the highest quality and impact
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          mx: "auto",
          maxWidth: "1200px",
        }}
      >
        {Fevoretcourse.length > 1 && (
          <>
            <IconButton
              onClick={scrollToPrev}
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
                display: isMobile && !showAll ? "none" : "flex",
              }}
            >
              <ChevronLeft fontSize="large" />
            </IconButton>
            <IconButton
              onClick={scrollToNext}
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
                display: isMobile && !showAll ? "none" : "flex",
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
            gap: isMobile ? 2 : 3,
            overflowX: isMobile && !showAll ? "hidden" : "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            py: 2,
            px: 1,
            justifyContent: isMobile && !showAll ? "center" : "flex-start",
          }}
        >
          {isMobile && !showAll ? (
            <Box
              sx={{
                width: isSmallMobile ? "280px" : "300px",
                px: 1,
              }}
            >
              <Cardcontant course={Fevoretcourse[currentIndex]} />
            </Box>
          ) : (
            Fevoretcourse.map((course) => (
              <Box
                key={course.id}
                sx={{
                  width: isMobile
                    ? isSmallMobile
                      ? "280px"
                      : "300px"
                    : "350px",
                  flexShrink: 0,
                  px: 1,
                }}
              >
                <Cardcontant course={course} />
              </Box>
            ))
          )}
        </Box>

        {isMobile && Fevoretcourse.length > 1 && (
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant={showAll ? "contained" : "outlined"}
              onClick={handleShowAll}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "50px",
                width: isSmallMobile ? "100%" : "auto",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: 2,
                },
                transition: "all 0.2s ease",
              }}
            >
              {showAll ? "Show less" : `Show more (${Fevoretcourse.length - 1})`}
            </Button>
          </Box>
        )}
      </Box>
      <Divider sx={{ my: 6, mx: "auto", maxWidth: 1200 }} />
    </Box>
  );
};

export default FevoretCoursePage;
