import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { TextField, Button, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import StyleIcon from "@mui/icons-material/Style";

import Navbar from "../components/Navbar";
import EventForm from "../components/CategoryForm";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;
const defaultTheme = createTheme();

const categories = [
  {
    title: "Health & Wellness",
    description: "Analysis, Clinic, Heart, +3",
    icon: "🏥",
  },
  {
    title: "Sport & Beauty",
    description: "Barber shop, Barber, Esthetics...",
    icon: "💇‍♂️",
  },
  {
    title: "Entertainment",
    description: "Cinema, Disco, Disco, +2",
    icon: "🎬",
  },
  {
    title: "Food & Drink",
    description: "Barbecue, Meat, Cocktail, +5",
    icon: "🍔",
  },
  {
    title: "Travel",
    description: "Travel",
    icon: "✈️",
  },
];

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleAddEvent = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ flexGrow: 1, p: 2 }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
                gutterBottom
              >
                <HomeIcon fontSize="large" sx={{ marginRight: "5px" }} />{" "}
                Category List
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddEvent}
                    sx={{ backgroundColor: "#09AEB3" }}
                  >
                    Add Category
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, padding: 2 }}>
              <Grid container spacing={2} direction="column">
                {filteredCategories.map((category, index) => (
                  <Grid item xs={12} key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: 2,
                        backgroundColor: index % 2 === 0 ? "white" : "#E1F5F6",
                      }}
                    >
                      <Grid container alignItems="center">
                        <Grid item xs={1}>
                          <Typography
                            variant="h4"
                            component="span"
                            role="img"
                            aria-label={category.title}
                          >
                            {category.icon}
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="h6">{category.title}</Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <StyleIcon sx={{ marginRight: "6px" }} />
                            {category.description}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Box
                            sx={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#09AEB3",
                              marginRight: "8px",
                              borderRadius: "20%",
                            }}
                          >
                            <IconButton aria-label="view">
                              <VisibilityIcon sx={{ color: "white" }} />
                            </IconButton>
                          </Box>
                          <Box
                            sx={{
                              width: "40px",
                              height: "40px",
                              backgroundColor: "#D32F2F",
                              borderRadius: "20%",
                            }}
                          >
                            <IconButton aria-label="delete">
                              <DeleteIcon sx={{ color: "white" }} />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
      <EventForm open={dialogOpen} handleClose={handleDialogClose} />
    </ThemeProvider>
  );
}
