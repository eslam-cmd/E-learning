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

const Spichilazetion = [
  {
    id: 1,
    title: "Web Development for Beginners",
    instructor: "Ahmed Mohamed",
    duration: 30,
    level: "Beginner",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Success_-_R.png",
  },
  {
    id: 2,
    title: "Medical Science Fundamentals",
    instructor: "Sarah Ali",
    duration: 45,
    level: "Intermediate",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Develop_-_R.png",
  },
  {
    id: 3,
    title: "Leadership Tools for Executives",
    instructor: "Khaled Hassan",
    duration: 20,
    level: "Intermediate",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/4.3_R.png",
  },
  {
    id: 4,
    title: "Professional Leadership Basics",
    instructor: "Khaled Hassan",
    duration: 30,
    level: "Advanced",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/1-04.png",
  },
  {
    id: 5,
    title: "Graphic Design Fundamentals",
    instructor: "Khaled Hassan",
    duration: 22,
    level: "Beginner",
    image:
      "https://edraak-marketing-uploads.edraak.org/Courses/Content-Writing-Course-Image2.jpg",
  },
];

const SpichilazetionPage = () => {
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
      prev === Spichilazetion.length - 1 ? 0 : prev + 1
    );
  };

  const scrollToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Spichilazetion.length - 1 : prev - 1
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
        minHeight: "100vh",
        backgroundImage:
          "url('https://www.edraak.org/static/scripts/7e99ff0a6c5f00d8bed074674bc70303.svg')",
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
          Specializations
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mt: 1,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: "800",
          }}
        >
          Enhance your skills through specialized educational paths and programs
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          mx: "auto",
          maxWidth: "1200px",
        }}
      >
        {Spichilazetion.length > 1 && (
          <>
            <IconButton
              onClick={scrollToPrev}
              sx={{
                position: "absolute",
                left: isMobile ? -12 : -20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: "background.paper",
                boxShadow: 3,
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  transform: "translateY(-50%) scale(1.1)",
                },
                width: isMobile ? 36 : 48,
                height: isMobile ? 36 : 48,
                display: isMobile && !showAll ? "none" : "flex",
                transition: "all 0.2s ease",
              }}
            >
              <ChevronLeft fontSize={isMobile ? "medium" : "large"} />
            </IconButton>
            <IconButton
              onClick={scrollToNext}
              sx={{
                position: "absolute",
                right: isMobile ? -12 : -20,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
                bgcolor: "background.paper",
                boxShadow: 3,
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                  transform: "translateY(-50%) scale(1.1)",
                },
                width: isMobile ? 36 : 48,
                height: isMobile ? 36 : 48,
                display: isMobile && !showAll ? "none" : "flex",
                transition: "all 0.2s ease",
              }}
            >
              <ChevronRight fontSize={isMobile ? "medium" : "large"} />
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
              <Cardcontant course={Spichilazetion[currentIndex]} />
            </Box>
          ) : (
            Spichilazetion.map((course) => (
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

        {!isMobile && Spichilazetion.length > 1 && (
          <Box
            sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 1 }}
          >
            {Spichilazetion.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: currentIndex === index ? "primary.main" : "grey.400",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    bgcolor: "primary.main",
                  },
                }}
              />
            ))}
          </Box>
        )}

        {isMobile && Spichilazetion.length > 1 && (
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
              {showAll
                ? "Show Less"
                : `Show More (${Spichilazetion.length - 1})`}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SpichilazetionPage;
