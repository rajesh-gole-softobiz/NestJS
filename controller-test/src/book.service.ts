/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService{

    addBook(): string{
        return 'This will add book';
    }

    deleteBook(): string{
        return 'This will delete book';
    }

    updateBook(): string{
        return 'This will update book';
    }

    findBook(): string{
        return 'This will find book';
    }
}