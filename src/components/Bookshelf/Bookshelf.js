import React, {Component} from 'react';
import Book from "../Book/Book";
import '../../App.css'

class Bookshelf extends Component {
    render() {

        if (this.props.shelfProp === 'currentlyReading') {
            this.title = 'Currently Reading'
        } else if (this.props.shelfProp === 'wantToRead') {
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
                            this.props.booksProp.filter(book => (
                                    book.shelf === this.props.shelfProp
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
