import { Dispatch, SetStateAction } from 'react'

function callNextPage(
    totalItems: number,
    itemsPerPage: number,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
) {
    if (page < Math.floor(totalItems / itemsPerPage) + 1) {
        setPage(page + 1)
    }
}

function callPreviousPage(
    page: number,
    setPage: Dispatch<SetStateAction<number>>
) {
    if (page >= 1) {
        setPage(page - 1)
    }
}


export { callNextPage, callPreviousPage }