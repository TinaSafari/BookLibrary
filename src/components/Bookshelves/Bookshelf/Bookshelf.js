import React, {Component} from 'react';
import Book from "../../Book/Book";
import '../../../App.css'

class Bookshelf extends Component {
    render() {
        console.log(this.props.bookslist)
        console.log(this.props.shelfindicator)

        if (this.props.shelfindicator === 'currentlyReading') {
            this.title = 'Currently Reading'
        } else if (this.props.shelfindicator === 'wantToRead') {
            this.title = 'Want to Read'
        } else {
            this.title = 'Read'
        }

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.bookslist.filter(book => (
                                    book.shelf === this.props.shelfindicator
                                )
                            ).map(book => {
                                return <li><Book bookProp={book}
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
