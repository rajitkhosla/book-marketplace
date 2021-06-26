import { ADD_BOOK_DETAILS, EDIT_BOOK_DETAILS, DELETE_BOOK_DETAILS, DELETE_BOOK_DETAILS_MANY, FETCH_BOOK_DETAILS, BUY_BOOK } from "../constants/bookConstants"
import axios from "axios"

export const createBookDetails = (form) => async (dispatch) => {
    try {
        const { data } = await axios.post("/books", form)
        dispatch({ type: ADD_BOOK_DETAILS, payload: data })
    } catch (error) {
        console.log(`error {error.message}`);
    }

}

export const editBookDetails = (id, form) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/books/${id}`, form)
        dispatch({ type: EDIT_BOOK_DETAILS, payload: data })
    } catch (error) {
        console.log(`error {error.message}`);
    }

}

export const fetchBooksDetail = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/books")
        dispatch({ type: FETCH_BOOK_DETAILS, payload: data })
    } catch (error) {
        console.log(`error {error.message}`);
    }
}
export const deleteBook = (id) => async (dispatch) => {
    try {
        await axios.delete(`/books/${id}`)
        dispatch({ type: DELETE_BOOK_DETAILS, payload: id })
    } catch (error) {
        console.log(`error {error.message}`);
    }
}
export const buyBook = (id) => async (dispatch) => {
    try {
        const { data } = await axios.put(`/books/buy/${id}`)
        dispatch({ type: BUY_BOOK, payload: data })
    } catch (error) {
        console.log(`error {error.message}`);
    }
}
export const multiDeleteBooks = (ids) => async (dispatch) => {
    try {
    await axios.post(`/books/delete`, ids)
        dispatch({ type: DELETE_BOOK_DETAILS_MANY, payload: ids })
    } catch (error) {
        console.log(`error {error.message}`);
    }
}


