import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Bookshelves from "./components/Bookshelves/Bookshelves";
import Search from "./components/Search/Search";

class BooksApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Books: []
        }

        this.updateBookshelf = this.updateBookshelf.bind(this);
        this.addBookOnShelf = this.addBookOnShelf.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((Books) => {
                this.setState(() => ({
                    Books
                }))
            })
    }

    updateBookshelf(book) {
        console.log("I'm updating my state")
        console.log(book)
        let BooksInState = this.state.Books;
        const index = BooksInState.findIndex(b => {
            return b.id === book.id
        })
        //if findIndex doesn't find a book it will return -1
        if (index === -1) {
            console.log("didn't find the book that i wanted to update")
            return;
        }
        BooksInState.splice(index,1,book)
        this.setState({Books: BooksInState})
    }

    addBookOnShelf(book) {
        let BooksInState = this.state.Books;
        // If we already have it, don't do anything
        if (this.state.Books.find(existingBooks => existingBooks.id === book.id)) {
            return;
        }
        BooksInState.push(book);
        this.setState({Books: BooksInState})
    }

    removeBook(book) {
        console.log(book.id)
        let BooksInState = this.state.Books;
        console.log(BooksInState)
        BooksInState = BooksInState.filter(currentBook => currentBook.id !== book.id);
        console.log(BooksInState)
        this.setState({Books: BooksInState})
    }

    render() {
        console.log(this.state.Books)
        return (
            <div>

                <Route exact path='/' render={() => (
                    // TODO add bookshelves component here
                    <Bookshelves bookData={this.state.Books}
                                 onUpdate={this.updateBookshelf}
                                 onRemove={this.removeBook}
                    />

                )}
                />
                <Route path='/search' render={({history}) => (
                    //TODO add search component here
                    <Search booksOnShelves={this.state.Books}
                            onAdd={this.addBookOnShelf}
                            onUpdate={this.updateBookshelf}
                            onRemove={this.removeBook}
                    />
                    // alert('I am inside the search')
                )}
                />
            </div>
        )
    }
}

export default BooksApp