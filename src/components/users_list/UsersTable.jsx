import { useState, useMemo, useContext } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Avatar,
  Paper,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EnhancedTableHead from "./TableHead";
import { styles } from "../CustomStyles";
import { capitalizeFirstLetter, descendingComparator, getComparator, stableSort } from "../utils";
import UserModal from "../modals/UserModal";
import { useEffect } from "react";
import { deleteSelectedUsers, deleteUser, getUsers } from "../../server/api";
import { TableContext } from "../../context/TableContext";
import { AlertContext } from "../../context/AlertContext";
import DoubleCheck from "../DoubleCheckPopup";
import TableFoot from "./TableFooter";

export default function EnhancedTable() {
  const { tableState, tableDispatch, getUsersData } = useContext(TableContext);
  const { loading, setLoading } = useContext(AlertContext);
  const { showAlert } = useContext(AlertContext);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [showUserModal, setShowUserModal] = useState(false);

  const [editingUser, setEditingUser] = useState({});
  const [users, setUsers] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const DCOpen = Boolean(anchorEl);
  const [anchorElId, setAnchorElId] = useState(null);

  const confirmedDelete = async (actionId) => {
    if (actionId) {
      try {
        const response = await deleteUser(actionId);
        showAlert("success", "User deleted successfully.");
        getUsersData();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
    setAnchorEl(null);
  };

  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users.map((n) => n.id);
      tableDispatch({ type: "SET_SELECTED_USERS", payload: newSelected });
      return;
    }
    tableDispatch({ type: "SET_SELECTED_USERS", payload: [] });
  };

  const handleSelectClick = (event, id) => {
    const selectedIndex = tableState.selectedUsers.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(tableState.selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(tableState.selectedUsers.slice(1));
    } else if (selectedIndex === tableState.selectedUsers.length - 1) {
      newSelected = newSelected.concat(tableState.selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        tableState.selectedUsers.slice(0, selectedIndex),
        tableState.selectedUsers.slice(selectedIndex + 1)
      );
    }
    tableDispatch({ type: "SET_SELECTED_USERS", payload: newSelected });
  };

  const handleChangePage = (event, newPage) => {
    if (newPage < 0 || newPage >= Math.ceil(users.length / usersPerPage) + 1) {
      return;
    }
    setPage(newPage);
  };

  const handleChangeusersPerPage = (event) => {
    setUsersPerPage(parseInt(event.target.value, 10));
  };

  // delete double check pop ups
  const userDelDoubleCheck = async (event, id) => {
    setAnchorEl(event.currentTarget);
    setAnchorElId(id);
  };

  useEffect(() => {
    if (tableState.filteredUsers) {
      setUsers(tableState.filteredUsers);
    }
  }, [tableState.filteredUsers]);

  const isSelected = (id) => tableState.selectedUsers.indexOf(id) !== -1;

  const visibleusers = useMemo(
    () =>
      stableSort(users, getComparator(order, orderBy)).slice(
        (page - 1) * usersPerPage,
        (page - 1) * usersPerPage + usersPerPage
      ),
    [order, orderBy, page, usersPerPage, users]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {users.length != 0 ? (
          <TableContainer sx={{ position: "relative" }}>
            {/* loading box */}
            {loading && (
              <Box
                sx={styles.loadingBoxStyle}
              >
                Please wait... Users has been deleting.
              </Box>
            )}
            <Table sx={{ minWidth: 1000 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={tableState.selectedUsers.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={users.length}
              />

              <TableBody>
                {visibleusers.map((row, index) => {
                  const isItemSelected = isSelected(row.id);

                  return (
                    <TableRow
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          id={`${index}`}
                          onClick={(event) => handleSelectClick(event, row.id)}
                          checked={isItemSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Avatar
                          alt="User Avatar"
                          src={`/images/${row.avatar}`}
                          sx={{ borderRadius: "4px" }}
                        />
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{capitalizeFirstLetter(row.role)}</TableCell>
                      <TableCell>
                        {/* Edit profile button */}
                        <EditIcon
                          onClick={() => {
                            setShowUserModal(true);
                            setEditingUser({id:row.id,name:row.name,username:row.username,email:row.email,role:row.role,avatar:row.avatar});
                          }}
                          sx={styles.tableCellIconStyle}
                        />
                        {/* Del profile button */}

                        <DeleteIcon
                          onClick={(event) => userDelDoubleCheck(event, row.id)}
                          sx={styles.tableCellIconStyle}
                        />
                        <DoubleCheck
                          open={DCOpen}
                          id={anchorElId}
                          confirmedDelete={confirmedDelete}
                          anchorEl={anchorEl}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
                {/* pagination */}
                <TableFoot page={page} setPage={setPage} users={users} usersPerPage={usersPerPage} handleChangePage={handleChangePage} handleChangeusersPerPage={handleChangeusersPerPage} />
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{
              padding: "20px",
              color: "#636363",
              fontFamily: "Montserrat",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
          >
            No users found.
          </Box>
        )}
      </Paper>
      <UserModal
        type={"edit"}
        editingUser={editingUser}
        showUserModal={showUserModal}
        setShowUserModal={setShowUserModal}
      />
    </Box>
  );
}
