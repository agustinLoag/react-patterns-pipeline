import React, { useState } from 'react'
import WithPagination from '../hocs/WithPagination.component'
import { usePaginationTable } from '../hooks/usePaginationTable'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { Button, Grid, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PaginationTable = ({ hocPaginationProps }) => {
  usePaginationTable(hocPaginationProps)
  const [colDefs, setColDefs] = useState([
    { field: "name" },
    { field: "url" },

  ]);
  const { cloneData, currentPage, totalPage, handlePrevPage, handleNextPage } = hocPaginationProps
  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        {/* The AG Grid component */}
        <AgGridReact rowData={cloneData} columnDefs={colDefs} />

      </div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <> <Typography>Current page: {currentPage + 1} of {totalPage}</Typography></>
          </Grid>
          <Grid item xs={4}>
            <>
              <Button variant="outlined" disabled={currentPage === 0} onClick={() => handlePrevPage()}>{'<  '}Previous</Button>
              <Button variant="outlined" disabled={(currentPage + 1) === totalPage} onClick={() => handleNextPage()}>Next {'>'}</Button>

            </>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export const WithPaginationTable = WithPagination(PaginationTable)
