import express from "express"
import { addBookDetails, fetchBookDetails, deleteBook,multiDeleteBook,editBook,buyBook } from "../controller/booksController.js"

const router = express.Router()

router.route("/").post(addBookDetails).get(fetchBookDetails);
router.route('/:id').delete(deleteBook).put(editBook);
router.route('/buy/:id').put(buyBook);
router.route("/delete").post(multiDeleteBook);



export default router;
