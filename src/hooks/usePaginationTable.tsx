import axios from "axios"
import { useEffect } from "react"

export const usePaginationTable = (hocPaginationProps) => {
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