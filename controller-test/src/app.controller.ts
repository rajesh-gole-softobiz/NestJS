/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from "@nestjs/common";



@Controller('book')
export class BookController{

    //add book
    @Post('/add')
    addBook() : string{
        return "This will add book"
    }

    //delete book
    @Delete('/delete')
    deleteBook() : string{
        return "This will delete book"
    }

    //update book
    @Put('/update')
    updateBook() : string{
        return "This will update book"
    }

    @Get('/findAll')
    //find all book
    findAllsBook() : string{
        return "This will find all books"
    }
}