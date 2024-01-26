/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Grid, Typography } from '@mui/material';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import { ChangeEvent, useState } from 'react';
import WithPagination from '../hocs/WithPagination.component';
import { usePaginationTable } from '../hooks/usePaginationTable';


interface HocPaginationProps {
  handleRowsPerPage: (e: ChangeEvent<HTMLInputElement>) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  makePagination: (arrayData: any[]) => void;
  totalPage: number;
  rowsPerPage: number;
  currentPage: number;
  cloneData: any[];
  valuesSearch: any[];
}

interface PaginationTableProps {
  hocPaginationProps: HocPaginationProps;
}

const PaginationTable:  React.FC<PaginationTableProps> = ({ hocPaginationProps }) => {
  usePaginationTable(hocPaginationProps)
  const [colDefs] = useState([
    { field: "name" },
    { field: "url" },

  ]);
  const { cloneData, currentPage, totalPage, handlePrevPage, handleNextPage } = hocPaginationProps
  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
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
