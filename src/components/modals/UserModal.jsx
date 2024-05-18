import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Modal,
  Button,
  MenuItem,
  FormControl,
  RadioGroup,
  Radio,
  Select,
  FormControlLabel,
  CircularProgress,
  Input,
  Typography,
} from "@mui/material";
import { styles } from "../CustomStyles";
import { createUser, updateUser } from "../../server/api";
import { AlertContext } from "../../context/AlertContext";
import { TableContext } from "../../context/TableContext";
import { roles, profileImages } from "../utils";

// Define some styles for the modal

const UserModal = ({
  showUserModal,
  setShowUserModal,
  type,
  editingUser
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  
  const [loading, setLoading] = useState(false);
  const { showAlert } = useContext(AlertContext);
  const { getUsersData } = useContext(TableContext);

  const handleClose = () => {
    setShowUserModal(false);
    
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleImageChange = (event) => {
    setAvatar(event.target.value);
  };

  useEffect(() => {
    if (showUserModal) {
      if (type === "edit") {
        setName(editingUser.name)
        setUsername(editingUser.username)
        setEmail(editingUser.email)
        setAvatar(editingUser.avatar)
        setRole(editingUser.role)
      }
    }
  }, [showUserModal])
  

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (type == "create") {
      try {
        const response = await createUser({
          name,
          username,
          email,
          role,
          avatar,
        });
        setLoading(false);
        setShowUserModal(false);
        showAlert("success", "User created successfully.");
        getUsersData();
      } catch (error) {
        console.error("Error creating user:", error);
      }
    } else {
      try {
        const response = await updateUser(editingUser.id, {
          name,
          username,
          email,
          role,
          avatar,
        });
        setLoading(false);
        setShowUserModal(false);
        showAlert("success", "User updated successfully.");
        getUsersData();
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
    setAvatar("");
    setName("");
    setUsername("");
    setEmail("");
    setRole("");
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
              value={name}
              disableUnderline
              required
              id="name"
              name="name"
              placeholder="Full Name"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <Input
              value={username}
              disableUnderline
              required
              id="username"
              name="username"
              placeholder="Username"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
            />
            <Input
              value={email}
              disableUnderline
              required
              id="email"
              name="email"
              placeholder="Email Address"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              type="email"
            />
            <FormControl sx={{ outline: "none" }}>
              <Select
                value={role}
                required
                id="role"
                name="role"
                onChange={handleRoleChange}
                displayEmpty
                sx={styles.usersModalInputStyle}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem
                  sx={{ backgroundColor: "#E3E3E3", marginTop: "-8px" }}
                  value=""
                  disabled
                >
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
              <Typography
                style={{
                  marginBottom: "14px",
                  color: "#636363",
                  fontSize: "15px",
                }}
              >
                Select Avatar
              </Typography>
              <RadioGroup
                aria-label="image"
                required
                id="avatar"
                name="avatar"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "320px",
                }}
                value={avatar}
                onChange={handleImageChange}
              >
                {profileImages.map((image) => {
                  let boxShadow = "";
                  if (image.src === avatar) {
                    boxShadow = "rgba(58, 98, 243, 0.8) 0px 5px 15px";
                  } else {
                    boxShadow = "none";
                  }
                  return (
                    <FormControlLabel
                      id={image.id}
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
                          src={`/images/${image.src}`}
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
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  sx={{ paddingX: "10px", paddingY: "5px" }}
                />
              ) : (
                <p style={{ textTransform: "capitalize" }}>{type} user</p>
              )}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserModal;
