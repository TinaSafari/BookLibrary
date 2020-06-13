import React, {Component} from 'react';
import Book from "../Book/Book";
import '../../App.css'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.books.map(book => {
                                return <li><Book imageSrc={book.imageSrc}
                                                 title={book.title}
                                                 author={book.author}
                                                 selectIdentifier={this.props.selectIdentifier}
                                /></li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )

    }
}

export default Bookshelf;
