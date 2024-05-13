import React, { useState } from "react";
import {
  Box,
  Modal,
  TextField,
  Button,
  MenuItem,
  FormControl,
  RadioGroup,
  Radio,
  Select,
  FormControlLabel,
  FormLabel,
  Input,
} from "@mui/material";
import { styles } from "../CustomStyles";

// Define some styles for the modal

const UserModal = ({ showUserModal, setShowUserModal, type }) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const handleClose = () => {
    setShowUserModal(false);
  };

  const roles = [
    { value: "contributor", label: "Contributor" },
    { value: "subscriber", label: "Subscriber" },
    { value: "author", label: "Author" },
    { value: "administrator", label: "Administrator" },
  ];

  const profileImages = [
    { id: 1, src: "profile1.png" },
    { id: 2, src: "profile2.png" },
    { id: 3, src: "profile3.png" },
    { id: 4, src: "profile4.png" },
    { id: 5, src: "profile5.png" },
    { id: 6, src: "profile6.png" },
  ];

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({fullName,userName,email,role,selectedImage});
  };

  return (
    <div>
      <Modal
        open={showUserModal}
        sx={styles.usersModalContainerStyle}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box sx={styles.usersModalBoxStyle}>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <Input
              value={fullName}
              disableUnderline
              required
              placeholder="Full Name"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
            />
            <Input
              value={userName}
              disableUnderline
              required
              placeholder="Username"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
            />
            <Input
              value={email}
              disableUnderline
              required
              placeholder="Email Address"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              type="email"
            />

            <FormControl sx={{ outline: "none" }}>
              <Select
                style={{}}
                value={role}
                required
                onChange={handleRoleChange}
                displayEmpty
                sx={styles.usersModalInputStyle}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem sx={{ backgroundColor:"#E3E3E3",marginTop:"-8px"}} value="" disabled>
                  <em>Role</em>
                </MenuItem>
                {roles.map((roleOption) => (
                  <MenuItem key={roleOption.value} value={roleOption.value}>
                    {roleOption.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ marginBottom: "30px" }} component="fieldset">
              <label
                style={{
                  marginBottom: "14px",
                  color: "#636363",
                  fontSize: "15px",
                }}
              >
                Select Avatar
              </label>
              <RadioGroup
                aria-label="image"
                required
                name="image"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "320px",
                }}
                value={selectedImage}
                onChange={handleImageChange}
              >
                {profileImages.map((image) => {
                  let boxShadow = "";
                  if (image.src == selectedImage) {
                    boxShadow = "rgba(58, 98, 243, 0.8) 0px 5px 15px";
                  } else {
                    boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
                  }
                  return (
                    <FormControlLabel
                      key={image.id}
                      value={image.src}
                      control={<Radio />}
                      sx={{
                        position: "relative",
                        width: "40px",
                        height: "40px",
                        marginX: "auto",
                      }}
                      label={
                        <img
                          style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "5px",
                            objectFit: "cover",
                            position: "absolute",
                            boxShadow: boxShadow,
                            left: "0px",
                            top: "0px",
                            backgroundColor: "white",
                          }}
                          src={`../../public/images/${image.src}`}
                          alt={`Image ${image.id}`}
                        />
                      }
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            <Button
              sx={{ width: "fit-content", mx: "auto" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              <p style={{ textTransform: "capitalize" }}>{type} user</p>
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserModal;