//database me se data find karne ke liye ye banaya he

import Book from '../model/books.js'

export const getBook = async(req,res)=>{
    try {
        const databook = await Book.find()
        res.status(200).json(databook)
    } catch (error) {
        console.log("error: ",error);
        res.status(500).json(error)
    }
};