/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { ChangeEvent, useEffect } from "react"

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

export const usePaginationTable = (hocPaginationProps: HocPaginationProps) => {
    const { makePagination } = hocPaginationProps
    useEffect(() => {
        async function getData() {
            const result = await axios.get('https://pokeapi.co/api/v2/ability/?limit=200&offset=20')
            makePagination(result.data.results)
            return result.data.results
        }
        getData();
    }, [])
}