import Link from "next/link"
import React from "react"
import Pagination from "react-bootstrap/Pagination"
import { v4 as uuidv4 } from "uuid"

export default function PaginationCustom(props) {
    const { activePage = 1, totalItem = 0, baseUrl = "#", itemsPerPage = 10 } = props
    const totalPage = Math.ceil(totalItem / itemsPerPage)
    let items = []
    const urlConection = baseUrl.includes("?") ? "&page=" : "?page="
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Link key={uuidv4()} href={baseUrl + urlConection + number} passHref>
                <Pagination.Item active={number === activePage}>{number}</Pagination.Item>
            </Link>
        )
    }
    return (
        <div style={{ width: "fit-content" }}>
            <Pagination>{items}</Pagination>
        </div>
    )
}
