import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Paper,
  FormControlLabel,
  Switch,
  Grid,
} from "@mui/material";

import ItalyFlag from "../../assets/italy.png";
import EnglishFlag from "../../assets/english.png";

const MerchantForm = ({ open, handleClose }) => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = (event) => {
    if (event.key === "Enter" && tagInput) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToDelete) => () => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create a new Merchant</DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              //   justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography margin={"0 16px 4px"}>Choose Image:</Typography>
            <TextField type="file" size="small" />
            {/* <Button variant="contained">Add Image</Button> */}
          </Box>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <img
                  src={ItalyFlag}
                  alt="Italian Flag"
                  style={{ width: "40px", marginRight: "5px" }}
                />
              ),
            }}
          />
          <TextField
            label="Nome"
            fullWidth
            margin="dense"
            InputProps={{
              startAdornment: (
                <img
                  src={EnglishFlag}
                  alt="English Flag"
                  style={{ width: "40px", marginRight: "5px" }}
                />
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Tag"
            fullWidth
            margin="dense"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
          <Box mt={1}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} onDelete={handleRemoveTag(tag)} />
            ))}
          </Box>
        </Box>
        <TextField label="Phone Number" fullWidth margin="dense" />
        <Box mt={2} display="flex" flexDirection="column">
          <Typography>Description</Typography>
          <Box display="flex">
            <TextField
              label="English"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              //   InputProps={{
              //     startAdornment: (
              //       <img src="path/to/italian-flag.png" alt="Italian Flag" />
              //     ),
              //   }}
            />
            <TextField
              label="Italy"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              //   InputProps={{
              //     startAdornment: (
              //       <img src="path/to/english-flag.png" alt="English Flag" />
              //     ),
              //   }}
            />
          </Box>
        </Box>
        <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <TextField
              fullWidth
              label="Enter a location"
              required
              margin="dense"
              placeholder="Enter a location"
              error
              helperText=""
            />
            <FormControlLabel control={<Switch />} label="Manual Entry" />
          </Box>
          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Proprietary Data
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" required margin="dense" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Surname" required margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  required
                  margin="dense"
                  placeholder="esempio.email.com"
                />
              </Grid>
            </Grid>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Active"
            />
            <FormControlLabel control={<Switch />} label="In evidence" />
          </Box>
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MerchantForm;
