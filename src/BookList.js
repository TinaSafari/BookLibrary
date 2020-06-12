import React, { Component } from 'react';
import Book from "./components/Book/Book";

class BookList extends Component {
    render() {
        return <div className="BookList">
            {
                this.props.books.map(book=> {
                    return <Book book={book}
                                  key={book.id}
                                  currentlyReading={this.props.currentlyReading}
                                  wantToRead={this.props.wantToRead}
                                  Read={this.props.Read}/>
                })
            }
        </div>
    }
}

export default BookList;