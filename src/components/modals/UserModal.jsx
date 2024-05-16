import React, { useContext, useEffect, useState } from "react";
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
  CircularProgress,
  Alert,
  FormLabel,
  Input,
} from "@mui/material";
import { styles } from "../CustomStyles";
import { createUser, getUser, updateUser } from "../../server/api";
import { AlertContext } from "../../context/AlertContext";
import { TableContext } from "../../context/TableContext";

// Define some styles for the modal

const UserModal = ({ showUserModal, setShowUserModal, type, id }) => {
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
    setAvatar(event.target.value);
  };

  const getUpdatedUser = async () => {
    if (showUserModal) {
      try {
        const response = await getUser(id);
        setName(response.name);
        setUsername(response.username);
        setEmail(response.email);
        setRole(response.role);
        setAvatar(response.avatar);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  };

  useEffect(() => {
    if (type == "edit") {
      getUpdatedUser();
    }
  }, [showUserModal]);

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
        const response = await updateUser(id, {
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
    setRole("")
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
              placeholder="Full Name"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />
            <Input
              value={username}
              disableUnderline
              required
              placeholder="username"
              sx={styles.usersModalInputStyle}
              onChange={(e) => setUsername(e.target.value)}
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
                value={avatar}
                onChange={handleImageChange}
              >
                {profileImages.map((image) => {
                  let boxShadow = "";
                  if (image.src == avatar) {
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
                <CircularProgress sx={{ paddingX: "10px", paddingY: "5px" }} />
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
