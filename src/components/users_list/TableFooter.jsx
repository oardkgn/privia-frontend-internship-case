import React from 'react'
import {
  TablePagination,
  TableFooter,
  TableRow,
  Pagination,
  Stack,
} from "@mui/material";

function TableFoot({page,setPage,users, usersPerPage, handleChangePage,handleChangeusersPerPage}) {
  let currentPage = page
  return (
    <TableFooter>
                <TableRow>
                  {users.length > 0 && (
                    <TablePagination
                      count={Math.ceil(users.length / usersPerPage)}
                      page={0}
                      rowsPerPageOptions={[-1]}
                      rowsPerPage={usersPerPage}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeusersPerPage}
                      ActionsComponent={({ page, count }) => {
                        return (
                          <Stack spacing={2}>
                            <Pagination
                              count={count}
                              page={page + currentPage}
                              onChange={handleChangePage}
                            />
                          </Stack>
                        );
                      }}
                    />
                  )}
                </TableRow>
              </TableFooter>
  )
}

export default TableFoot