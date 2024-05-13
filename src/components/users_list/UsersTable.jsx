import { useState, useMemo, useContext } from "react";
import axios from "axios";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableFooter,
  TableRow,
  Pagination,
  Avatar,
  Stack,
  Paper,
  Checkbox,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EnhancedTableHead from "./TableHead";
import { styles } from "../CustomStyles";
import { capitalizeFirstLetter } from "../utils";
import UserModal from "../modals/UserModal";
import { useEffect } from "react";
import { getUsers } from "../../api/api";
import { TableContext } from "../../context/TableContext";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const {tableState, tableDispatch} = useContext(TableContext);
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState(tableState.selectedUsers);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      tableDispatch({ type: "SET_SELECTED_USERS", payload:newSelected  })
      return;
    }
    tableDispatch({ type: "SET_SELECTED_USERS", payload:[]  });
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
    tableDispatch({ type: "SET_SELECTED_USERS", payload:newSelected  })
  };

  const handleChangePage = (event, newPage) => {
    if (newPage < 0 || newPage >= Math.ceil(rows.length / rowsPerPage) + 1) {
      return;
    }
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    if (tableState.users) {
      setRows(tableState.users)
    }
  }, [tableState.users])
  

  const isSelected = (id) => tableState.selectedUsers.indexOf(id) !== -1;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        (page - 1) * rowsPerPage,
        (page - 1) * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {rows.length != 0 ? (
          <TableContainer>
            <Table
              sx={{ minWidth: 1000,}}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead
                numSelected={tableState.selectedUsers.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />

              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

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
                          onClick={(event) => handleSelectClick(event, row.id)}
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Avatar
                          alt="User Avatar"
                          src={`../../public/images/${row.avatar}`}
                          sx={{ borderRadius: "4px" }}
                        />
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{capitalizeFirstLetter(row.role)}</TableCell>
                      <TableCell>
                        <EditIcon
                          onClick={() => {setShowUserModal(true);setEditingUserId(row.id)}}
                          sx={styles.tableCellIconStyle}
                        />{" "}
                        {/* Edit profile button */}
                        <DeleteIcon sx={styles.tableCellIconStyle} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>

              <TableFooter>
                <TableRow>
                  {rows.length > 0 && (
                    <TablePagination
                      count={Math.ceil(rows.length / rowsPerPage)}
                      page={page - 1}
                      rowsPerPageOptions={[-1]}
                      rowsPerPage={rowsPerPage}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={({ page, count }) => {
                        return (
                          <Stack spacing={2}>
                            <Pagination
                              count={count}
                              page={page + 1}
                              onChange={handleChangePage}
                            />
                          </Stack>
                        );
                      }}
                    />
                  )}
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        ) : (
          <Box sx={{padding:"20px", color:"#636363",fontFamily:"Montserrat", borderBottom:"1px solid gray",textAlign:"center"}}>
            No users found.
          </Box>
        )}
      </Paper>
      <UserModal
        type={"edit"}
        id={editingUserId}
        showUserModal={showUserModal}
        setShowUserModal={setShowUserModal}
      />
    </Box>
  );
}
