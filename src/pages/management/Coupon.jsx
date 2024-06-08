import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import {
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import SortIcon from "@mui/icons-material/Sort";
import { Edit, Delete } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StyleIcon from "@mui/icons-material/Style";
import Switch from "@mui/material/Switch";

import Navbar from "../components/Navbar";
import EventForm from "../components/CategoryForm";

import "../styles.css";

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

const initialCoupons = [
  {
    image: "path/to/your/image1.png", // Add appropriate image paths
    name: "15% Discount",
    description: "15% Discount",
    active: true,
  },
  {
    image: "path/to/your/image2.png",
    name: "Buy 2 Get 1 Free",
    description: "Buy 2 Get 1 Free",
    active: true,
  },
  {
    image: "path/to/your/image3.png",
    name: "50% Discount",
    description: "50% Discount",
    active: true,
  },
  {
    image: "path/to/your/image4.png",
    name: "30% Discount",
    description: "30% Discount",
    active: true,
  },
];

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [coupons, setCoupons] = useState(initialCoupons);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sortedCoupons = [...coupons].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setCoupons(sortedCoupons);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

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
                <HomeIcon fontSize="large" sx={{ marginRight: "5px" }} /> List
                Tipologie Coupon
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={7}>
                  <TextField
                    sx={{ width: "80%" }}
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
                  md={2}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Typography>Active</Typography>
                  <input className="toggle" type="checkbox" />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleAddEvent}
                    sx={{ backgroundColor: "#09AEB3" }}
                  >
                    Add Coupon
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      Name
                      <IconButton onClick={handleSort}>
                        <SortIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {coupons.map((coupon, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <img
                          src={coupon.image}
                          alt={coupon.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </TableCell>
                      <TableCell>{coupon.name}</TableCell>
                      <TableCell>{coupon.description}</TableCell>
                      <TableCell>
                        {coupon.active && (
                          <CheckCircleIcon style={{ color: "green" }} />
                        )}
                      </TableCell>
                      <TableCell>
                        <IconButton aria-label="edit">
                          <Edit />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
      <EventForm open={dialogOpen} handleClose={handleDialogClose} />
    </ThemeProvider>
  );
}
