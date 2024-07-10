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
  TableSortLabel,
  TableRow,
  TablePagination,
  Avatar,
  Chip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import SortIcon from "@mui/icons-material/Sort";
import { Edit, Delete, Add, Visibility } from "@mui/icons-material";
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

const initialBusinesses = [
  {
    name: "Stella del Mare Restaurant",
    description:
      "La Pescheria Stella del Mare nasce più di 100 anni fa dalla creatività e dalla passione per la pe...",
    address: "Corso Principe di Piemonte, 1, Galatina",
    tags: ["Fish", "Food", "Mare", "+5"],
    validity: "12 months",
    price: 100,
    credit: 200,
    active: true,
  },
  {
    name: "Masseria Balsamo",
    description:
      "Masseria Balsamo è stata una delle cinque masserie su cui è sorta la prima comunità di Colle...",
    address: "Largo Milano, 25, 73013 Colle, Galatina",
    tags: ["Beb", "Bed", "Bed and breakfast", "+3"],
    validity: "6 months",
    price: 150,
    credit: 250,
    active: false,
  },
  // Add other businesses here...
];

const createData = (name, surname, email) => {
  return { name, surname, email };
};

const initialUsers = [
  createData("John", "Doe", "john.doe@example.com"),
  createData("Jane", "Smith", "jane.smith@example.com"),
  createData("Alice", "Johnson", "alice.johnson@example.com"),
  // Add more users as needed
];

export default function Dashboard() {
  const [users, setUsers] = useState(initialUsers);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (orderBy === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (orderBy === "surname") {
      return order === "asc"
        ? a.surname.localeCompare(b.surname)
        : b.surname.localeCompare(a.surname);
    } else {
      return order === "asc"
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    }
  });

  const [open, setOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [coupons, setCoupons] = useState(initialBusinesses);
  const [sortOrder, setSortOrder] = useState("asc");

  const [businesses, setBusinesses] = useState(initialBusinesses);
  //   const [order, setOrder] = useState("asc");
  //   const [orderBy, setOrderBy] = useState("name");

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
    const sortedBusinesses = [...businesses].sort((a, b) => {
      if (isAsc) {
        return a[property] > b[property] ? 1 : -1;
      } else {
        return a[property] < b[property] ? 1 : -1;
      }
    });
    setBusinesses(sortedBusinesses);
  };

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
          {/* <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
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
          </Container> */}
          {/* <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
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
                <HomeIcon fontSize="large" sx={{ marginRight: "5px" }} /> Credie
                Packages List
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
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={orderBy === "name" ? order : "asc"}
                        onClick={() => handleSortRequest("name")}
                      >
                        Name
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "price"}
                        direction={orderBy === "price" ? order : "asc"}
                        onClick={() => handleSortRequest("price")}
                      >
                        Price
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "credit"}
                        direction={orderBy === "credit" ? order : "asc"}
                        onClick={() => handleSortRequest("credit")}
                      >
                        Credit
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Validity</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {businesses.map((business, index) => (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor: business.active
                          ? "inherit"
                          : "#f5f5f5",
                      }}
                    >
                      <TableCell>{business.name}</TableCell>
                      <TableCell>{business.description}</TableCell>
                      <TableCell>{business.price}</TableCell>
                      <TableCell>{business.credit}</TableCell>
                      <TableCell>{business.validity}</TableCell>
                      <TableCell>
                        <Box
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
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container> */}
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
                <HomeIcon fontSize="large" sx={{ marginRight: "5px" }} />
                Application Users
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
                    Add User
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={orderBy === "name" ? order : "asc"}
                        onClick={() => handleRequestSort("name")}
                      >
                        Name
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "surname"}
                        direction={orderBy === "surname" ? order : "asc"}
                        onClick={() => handleRequestSort("surname")}
                      >
                        Surname
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "email"}
                        direction={orderBy === "email" ? order : "asc"}
                        onClick={() => handleRequestSort("email")}
                      >
                        Email
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user, index) => (
                      <TableRow key={index}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.surname}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "",
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
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Container>
        </Box>
      </Box>
      <EventForm open={dialogOpen} handleClose={handleDialogClose} />
    </ThemeProvider>
  );
}
