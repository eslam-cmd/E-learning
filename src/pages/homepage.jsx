import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{backgroundImage: "url('https://www.edraak.org/static/images/homepage/rtl/unlock-knowledge-bg.eb8b4177d573.svg')", p: { xs: 1, sm: 2 } }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        spacing={4}
        direction={{ xs: "column-reverse", md: "row" }}

      >
        <Grid item xs={12} md={8} sx={{marginTop:"50px"}}>
          <Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography 
              variant={isSmallScreen ? "h3" : "h2"} 
              sx={{ 
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
                fontSize: {
                  xs: "2rem",
                  sm: "3rem",
                  md: "3.75rem"
                }
              }}
            >
              Learn. Improve. Grow.
            </Typography>

            <Typography
              variant={isSmallScreen ? "body1" : "h6"}
              sx={{
                whiteSpace: "pre-line",
                textAlign: { xs: "center", md: "left" },
                fontSize: {
                  xs: "1rem",
                  sm: "1.25rem"
                }
              }}
            >
              {`Enhance your skills with career-focused programs and earn 
              certificates that will boost your professional journey`}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                mb: { xs: 2, md: 4 },
                px: 4,
                py: 1.5,
                fontSize: { xs: "1rem", sm: "1.1rem" },
                fontWeight: 600,
                width: { xs: "100%", sm: "auto" }
              }}
            >
              Explore our Programs
            </Button>
            
         
            
            <Grid
              container
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              {[
                {
                  icon: "https://www.edraak.org/static/scripts/1df27a1f65d7a11c430110d8c0b19059.svg",
                  text: "Learn for Free",
                },
                {
                  icon: "https://www.edraak.org/static/scripts/24a5b0927f8bfdee096f8788396076ef.svg",
                  text: "In Arabic",
                },
                {
                  icon: "https://www.edraak.org/static/scripts/1b5b8c5bbcaaa4382cf7d3656fd0d067.svg",
                  text: "World Class Content and Instructors",
                },
              ].map((item, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={4} 
                  md="auto" 
                  key={index}
                  sx={{
                    minWidth: { md: "180px" }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      px: { xs: 0, sm: 2 },
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.text}
                      style={{
                        width: 40,
                        height: 40,
                        marginBottom: 8,
                      }}
                    />
                    <Typography 
                      variant="body2" 
                      align="center"
                      sx={{
                        fontSize: { xs: "0.875rem", sm: "0.9rem" }
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ 
            display: "flex", 
            justifyContent: "center",
            mt: { xs: 0, md: 0 } 
          }}>
            <img
              src="https://www.edraak.org/static/scripts/8e9b55875528c3338eef2de87c4a112f.png"
              alt="Learning illustration"
              style={{
                maxWidth: "100%",
                height: "auto",
                maxHeight: isSmallScreen ? 250 : isMediumScreen ? 300 : 400,
                marginTop:"100px"
              }}
            />
          </Box>
          <Box
            sx={{
              height: 2,
              my: { xs: 4, md: 6 },
              background:
                "linear-gradient(90deg, rgba(25,118,210,0) 0%, rgba(25,118,210,1) 50%, rgba(25,118,210,0) 100%)",
              display: { xs: "none", sm: "block" }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}