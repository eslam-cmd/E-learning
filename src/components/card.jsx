import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Box,
  Stack,
  Rating,
  Divider,
} from "@mui/material";
import { Schedule, School, Star } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const Cardcontant = ({ course = {} }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate("/course-details", {
      state: {
        courseData: course,
      },
    });
  };
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 380,
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
        },
        border: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Course Thumbnail */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={course.image || "/placeholder-course.jpg"}
          alt={course.title}
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            objectFit: "cover",
          }}
        />
        <Chip
          label={course.level || "Beginner"}
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            fontWeight: 600,
            fontSize: "0.65rem",
            letterSpacing: "0.5px",
          }}
        />
      </Box>

      {/* Course Content */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
          <Chip
            label={course.category || "Development"}
            size="small"
            sx={{
              backgroundColor: "#e3f2fd",
              color: "#1976d2",
              fontWeight: 600,
              fontSize: "0.65rem",
            }}
          />
          <Chip
            label={`${course.duration || 30}h`}
            size="small"
            icon={<Schedule sx={{ fontSize: "0.9rem" }} />}
            sx={{
              backgroundColor: "#f5f5f5",
              color: "text.secondary",
              fontWeight: 500,
              fontSize: "0.65rem",
            }}
          />
        </Stack>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: "1.1rem",
            lineHeight: 1.4,
            mb: 1,
            minHeight: "3em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course.title || "Course Title"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <School sx={{ fontSize: "1rem" }} />
          {course.instructor || "Instructor Name"}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
          <Rating
            value={course.rating || 4.5}
            precision={0.5}
            readOnly
            size="small"
            emptyIcon={<Star fontSize="inherit" style={{ opacity: 0.5 }} />}
            sx={{ mr: 1 }}
          />
          <Typography variant="body2" sx={{ fontWeight: 600, mr: 0.5 }}>
            {course.rating || 4.5}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ({Math.floor((course.rating || 4.5) * 20)} reviews)
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {course.price ? `$${course.price}` : "Free"}
          </Typography>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={handleDetailsClick}
            sx={{
              borderRadius: "8px",
              px: 2.5,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "0.85rem",
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            View details{" "}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

Cardcontant.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    instructor: PropTypes.string,
    duration: PropTypes.number,
    level: PropTypes.string,
    category: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
  }),
};

export default Cardcontant;
