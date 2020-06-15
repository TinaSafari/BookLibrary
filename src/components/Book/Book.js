import React, {Component} from 'react'

class Book extends Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.addBook = this.addBook.bind(this);
    //     this.removeBook = this.removeBook.bind(this);
    // }

    // renderAction() {
    //     if (this.props.Read) {
    //         return <button className="Book-action" onClick={this.removeBook}>-</button>
    //     } else {
    //         return <button className="Book-action" onClick={this.addBook}>+</button>
    //     }
    // }
    //
    // addBook() {
    //     this.props.currentlyReading(this.props.book);
    // }
    //
    // removeBook() {
    //     this.props.wantToRead(this.props.book);
    // }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url( ${this.props.bookProp.imageLinks.thumbnail} )`

                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" selected={'currentlyReading' === this.props.bookProp.shelf}>Currently Reading</option>
                            <option value="wantToRead" selected={'wantToRead' === this.props.bookProp.shelf}>Want to Read</option>
                            <option value="read" selected={'read' === this.props.bookProp.shelf}>Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.bookProp.title}</div>
                <div className="book-authors">{this.props.bookProp.authors}</div>
                <div className="book-pageCount">{this.props.bookProp.pageCount}</div>
                <div className="book-language">{this.props.bookProp.language}</div>
            </div>
            // <div className="Book">
            //     <div className="Book-information">
            //         <h3>{this.props.bookProp.name}</h3>
            //         <p>{this.props.bookProp.titel} | {this.props.bookProp.author} </p>
            //     </div>
            //     {this.renderAction()}
            // </div>
        )
    }
}

export default Book;