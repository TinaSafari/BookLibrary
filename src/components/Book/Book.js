import React from 'react'

//Book component has two props:
// props#1 bookProp that contain a book object that has many values like title
//props #2 shelfIndicator that indicates the book's shelf. Possible values are: currentlyReading, wantToRead, read, NONE
const Book = (props) => {

    const onChangeHandler = (newShelf) => {
        console.log(newShelf)
        console.log(props.bookProp)
        if (newShelf === "NONE") {
            //if user select NONE from drop-down
            removeBook(newShelf)
        } else if (props.shelfIndicator === "NONE") {
            //if user selects any option but NONE when the current shelf is none-it means this is an add
            addBook(newShelf)
        } else {
            updateBook(newShelf)
        }
    }


    const updateBook = (newShelf) => {
        props.onUpdate(props.bookProp, newShelf);
    }

    const addBook = (newShelf) => {
        props.onAdd(props.bookProp, newShelf);
    }

    const removeBook = (newShelf) => {
        props.onRemove(props.bookProp, newShelf);
    }


    const imageURL = ((props.bookProp.imageLinks) ? (props.bookProp.imageLinks.thumbnail) :
        "https://i2.pngguru.com/preview/220/955/649/book-cover-books-school-supplies-watercolor-paint-wet-ink-red-rectangle-png-clipart-thumbnail.jpg")
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url( ${imageURL} )`
                }}>
                </div>
                <div className="book-shelf-changer">
                    <select value={props.shelfIndicator} onChange={(event => {
                        onChangeHandler(event.target.value)
                    })}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="NONE">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{props.bookProp.title}</div>
            <div className="book-authors">{props.bookProp.authors}</div>
            <div className="book-pageCount">{props.bookProp.pageCount}</div>
            <div className="book-language">{props.bookProp.language}</div>
        </div>
    )
}

export default Book;