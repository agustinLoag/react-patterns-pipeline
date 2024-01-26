import React, { useEffect, useState } from 'react'

const WithPagination = (ComponentRender) => {
    const WrappedComponent = () => {
        const [totalPage, setTotalPage] = useState(0)
        const [rowsPerPage, setRowsPerPage] = useState(25)
        const [currentPage, setCurrentPage] = useState(0)
        const [valuesSearch, setValuesSearch] = useState([])
        const [cloneData, setCloneData] = useState([])

        useEffect(() => {
            changePagination()
            setTotalPage(Math.ceil(valuesSearch.length / rowsPerPage))
        }, [rowsPerPage, currentPage])

        const handleRowsPerPage = (e) => {
            const { value } = e.target;
            setRowsPerPage(+value)
            setCurrentPage(0)
        }

        const handleNextPage = (e) => {
            if ((currentPage + 1) < totalPage) {
                setCurrentPage(currentPage + 1)
            }
        }

        const handlePrevPage = (e) => {
            if (currentPage !== 0 ) {
                setCurrentPage(currentPage - 1)
            }
        }


        const changePagination = () => {
            const lastRow = (currentPage+1) * rowsPerPage;
            const firstRow = lastRow - rowsPerPage;
            const dataPagination = valuesSearch.slice(firstRow, lastRow)
            setCloneData(dataPagination)
        }

        const makePagination = (arrayData) => { 
            setTotalPage(Math.ceil(arrayData.length/rowsPerPage))
            setValuesSearch(arrayData)
            setCurrentPage(0)
            const lastRow = 1 * rowsPerPage;
            const firstRow = lastRow - rowsPerPage;
            const dataPagination = arrayData.slice(firstRow, lastRow);
            setCloneData(dataPagination)
         }

         const hocPaginationProps = {
            handleRowsPerPage,
            handleNextPage,
            handlePrevPage,
            makePagination,
            totalPage,
            rowsPerPage,
            currentPage,
            cloneData,
            valuesSearch
         }

         return <ComponentRender hocPaginationProps={hocPaginationProps} />

    }
    return WrappedComponent;
}

export default WithPagination