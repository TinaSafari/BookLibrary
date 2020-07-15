import React from 'react'
import Bookshelf from "./Bookshelf/Bookshelf";
import {Link} from "react-router-dom";

const  Bookshelves = (props) => {
    console.log("Bookshelves RENDR")
    return (
        <div>

            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div>
                <Bookshelf bookslist={props.bookData}
                           shelfindicator='currentlyReading'
                           onUpdate={props.onUpdate}
                           onAdd={props.onAdd}
                           onRemove={props.onRemove}/>

                <Bookshelf bookslist={props.bookData}
                           shelfindicator='wantToRead'
                           onUpdate={props.onUpdate}
                           onAdd={props.onAdd}
                           onRemove={props.onRemove}/>

                <Bookshelf bookslist={props.bookData}
                           shelfindicator='read'
                           onUpdate={props.onUpdate}
                           onAdd={props.onAdd}
                           onRemove={props.onRemove}/>
                <div>
                    <Link
                        to='/search'
                        className='open-search'
                    >Add a book</Link>
                </div>
            </div>
        </div>
    )
}

export default Bookshelves





