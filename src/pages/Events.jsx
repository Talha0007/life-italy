import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import HomeIcon from "@mui/icons-material/Home";
import { mainListItems, secondaryListItems } from "./components/Listitems";

import Navbar from "./components/Navbar";

import {
  Chip,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const tilesData = [
  {
    image:
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fHww",
    title: "Stella del Mare Restaurant",
    description:
      "La Pescheria Stella del Mare nasce più di 100 anni fa dalla creatività e dalla passione per la pe...",
    location: "Corso Principe di Piemonte, 1... Galatina",
    tags: ["Fish", "Food", "Mare", "+5"],
    isActive: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fHww",
    title: "Masseria Balsamo",
    description:
      "Masseria Balsamo è stata una delle cinque masserie su cui è sorta la prima comunità di Colle...",
    location: "Largo Milano, 25, 73013 Coll... Galatina",
    tags: ["Beb", "Bed", "Bed and breakfast", "..."],
    isActive: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fHww",
    title: "B&B Li Cetti",
    description: "B&B Li Cetti",
    location: "Viale Marche, 11d, 73100 Lec... Lecce",
    tags: ["Bad and breakfast", "Beb"],
    isActive: true,
  },
];

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleAddMerchant = () => {};

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
                // variant="h5"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "24px",
                  fontWeight: "700",
                  // color: "darkgray  ",
                }}
                gutterBottom
              >
                <HomeIcon fontSize="large" sx={{ marginRight: "5px" }} /> Events
                List
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={8}>
                  <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    placeholder="Search merchants..."
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
                    // color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddMerchant}
                    sx={{ backgroundColor: "#09AEB3" }}
                  >
                    Add Event
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              {tilesData.map((tile, index) => (
                <Card
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mb: 2 }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 100, height: 100 }}
                    image={tile.image}
                    alt={tile.title}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      //   flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {tile.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {tile.description}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                      >
                        {tile.location}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {tile.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ mr: 0.5 }}
                          />
                        ))}
                        {!tile.isActive && (
                          <Chip
                            label="Non attivo"
                            color="default"
                            size="small"
                          />
                        )}
                      </Box>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton aria-label="view">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
