import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Stack,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountIcon,
  ExpandMore as ExpandMoreIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ModernHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);

  const open = Boolean(anchorEl);
  const mobileMenuOpen = Boolean(mobileMenuAnchor);
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/signin");
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClick = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 1,
        zIndex: "9999",
        position: "fixed",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: { xs: 1, md: 3 },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              E-Learning
            </Typography>
          </Box>

          {!isMobile && (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mx: 2,
                }}
              >
                <Button
                  color="inherit"
                  endIcon={<ExpandMoreIcon />}
                  onClick={handleMenuClick}
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.9rem",
                  }}
                >
                  Courses
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      mt: 1.5,
                      minWidth: 200,
                      boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                      borderRadius: "8px",
                      "& .MuiMenuItem-root": {
                        px: 2,
                        py: 1.5,
                        typography: "body2",
                        fontWeight: 500,
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Web Development</MenuItem>
                  <MenuItem onClick={handleClose}>Data Science</MenuItem>
                  <MenuItem onClick={handleClose}>Mobile Development</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>All Courses</MenuItem>
                </Menu>

                <Button
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.9rem",
                    ml: 1,
                  }}
                >
                  Programs
                </Button>

                <Button
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.9rem",
                    ml: 1,
                  }}
                >
                  For Business
                </Button>
              </Box>
            </>
          )}

          <Box
            sx={{
              flexGrow: 1,
              mx: { xs: 1, md: 3 },
              maxWidth: { md: "500px" },
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Search courses..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "8px",
                  backgroundColor: "action.hover",
                  "&:hover": {
                    backgroundColor: "action.selected",
                  },
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "auto",
            }}
          >
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={handleMobileMenuClick}>
                  <MenuIcon />
                </IconButton>

                <Menu
                  anchorEl={mobileMenuAnchor}
                  open={mobileMenuOpen}
                  onClose={handleClose}
                  PaperProps={{
                    sx: {
                      width: "100%",
                      maxWidth: "300px",
                      mt: 5,
                      p: 1,
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>Courses</MenuItem>
                  <MenuItem onClick={handleClose}>Programs</MenuItem>
                  <MenuItem onClick={handleClose}>For Business</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>Sign In</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button fullWidth>
                      <Link
                        to="/signinpage"
                        variant="contained"
                        sx={{ mt: 1 }}
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained" size="large" sx={{ px: 4 }}>
                          Login
                        </Button>
                      </Link>
                    </Button>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <IconButton color="inherit" sx={{ mx: 0.5 }}>
                  <Badge badgeContent={3} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                <IconButton color="inherit" sx={{ mx: 0.5 }}>
                  <AppsIcon />
                </IconButton>

                <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleSigninClick}
                    sx={{
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "none",
                      borderRadius: "8px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
