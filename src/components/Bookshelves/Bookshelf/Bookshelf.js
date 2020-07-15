import React from 'react';
import Book from "../../Book/Book";
import '../../../App.css'

const Bookshelf = (props) => {
    let title
    if (props.shelfindicator === 'currentlyReading') {
        title = 'Currently Reading'
    } else if (props.shelfindicator === 'wantToRead') {
        title = 'Want to Read'
    } else if (props.shelfindicator === 'NONE') {
        title = 'None'
    } else {
        title = 'Read'
    }
    console.log("Bookshelf RENDR")
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.bookslist.filter(book => (
                                book.shelf === props.shelfindicator
                            )
                        ).map(book => {
                            return <li key={book.id}><Book bookProp={book}
                                                           shelfIndicator={props.shelfindicator}
                                                           onUpdate={props.onUpdate}
                                                           onAdd={props.onAdd}
                                                           onRemove={props.onRemove}/>
                            </li>
                        })
                    }
                </ol>
            </div>
        </div>
    )

}

export default Bookshelf;
