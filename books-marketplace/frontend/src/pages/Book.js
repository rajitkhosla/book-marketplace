import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import BookForm from "../components/BookForm"
import BooksTable from "../components/BooksTable"
import { fetchBooksDetail } from "../actions/bookActions"
import { useDispatch } from "react-redux"

const Book = () => {
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooksDetail())
    })

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <Header />
            <BookForm open={open} currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose} />
            <BooksTable handleOpen={handleOpen} setCurrentId={setCurrentId} currentId={currentId} />
        </div>
    )
}

export default Book

