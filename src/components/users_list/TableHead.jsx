import * as React from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { TableSortLabel } from "@mui/material";

const headCells = [
  {
    id: "avatar",
    numeric: false,
    disablePadding: true,
    label: "Avatar",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "username",
    numeric: true,
    disablePadding: false,
    label: "Username",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "role",
    numeric: true,
    disablePadding: false,
    label: "Role",
  },
  {
    id: "edit",
    numeric: true,
    disablePadding: false,
    label: "Edit",
  },
];

export default function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          sx={{
            display: "flex",
            alignItems: "center",
            height: "57px",
            paddingInlineEnd: "20px",
          }}
          padding="checkbox"
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
          {numSelected > 0 && (
            <Box sx={{ marginInlineStart: "-5px" }}>{numSelected}</Box>
          )}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={
              headCell.id === "avatar"
                ? { width: "8%" }
                : headCell.id === "edit"
                ? { width: "10%" }
                : {}
            }
          >
            {headCell.id === "avatar" || headCell.id === "edit" ? (
              <Box>{headCell.label}</Box>
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}