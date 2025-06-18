import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Chip,
  Avatar,
  Divider,
  Container,
} from "@mui/material";
import { ArrowBack, Schedule, People, Star } from "@mui/icons-material";
import Footer from "../components/ultimate/footer";

const CourseDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const course = state?.courseData;

  if (!course) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h4" color="error" sx={{ mb: 2 }}>
          Course details not found{" "}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          startIcon={<ArrowBack />}
        >
          Return to Home
        </Button>
      </Container>
    );
  }

  return (
    <>
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3 }}
      >
        Back
      </Button>

      <Box
        sx={{
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          {course.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar src={course.image} sx={{ mr: 2, width: 60, height: 60 }} />
          <Box>
            <Typography variant="h6">{course.instructor}</Typography>
            <Typography variant="body2" color="text.secondary">
              Certified Instructor

            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          <Chip icon={<Schedule />} label={`${course.duration} ساعة`} />
          <Chip label={course.level} color="primary" />
          <Chip label={course.category} />
          <Chip icon={<Star />} label={`${course.rating}/5`} color="warning" />
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
          {course.description || "No description available for this course"}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {course.price ? `${course.price} SYR` : "Free"}
          </Typography>
          <Button variant="contained" size="large" sx={{ px: 4 }}>
            Register Now
          </Button>
        </Box>
      </Box>
    </Container>
    <Footer/>
  </>
  );
};

export default CourseDetails;
