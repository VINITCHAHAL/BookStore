const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();
// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
router.post("/create-book", verifyAdminToken , postABook)
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken , UpdateBook);
router.delete("/:id", verifyAdminToken , deleteABook)
module.exports = router;
