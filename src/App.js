import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Bookshelves from "./components/Bookshelves/Bookshelves";
import Search from "./components/Search/Search";

class BooksApp extends Component {

    state = {
        Books: [],
        name: "TINA"
    }

    componentDidMount = () => {
        console.log("DID MOUNTs")
        BooksAPI.getAll()
            .then((Books) => {
                this.setState(() => ({
                    Books
                }))
            })
    }

    updateBookshelf = (book, newShelf) => {
        console.log("I'm updating my book shelf")
        let BooksInState = [...this.state.Books]
        const index = BooksInState.findIndex(b => {
            return b.id === book.id
        })
        //if findIndex doesn't find a book it will return -1
        if (index === -1) {
            console.log("didn't find the book that i wanted to update")
            return;
        }
        this.updateApi(book, newShelf)
        book.shelf = newShelf
        BooksInState.splice(index, 1, book)
        this.setState({Books: BooksInState, name: "SOHAIL"})
        console.log("UPDATED THE STATE")
    }

    addBookOnShelf = (book) => {
        let BooksInState = [...this.state.Books]
        // If we already have it, don't do anything
        if (this.state.Books.find(existingBooks => existingBooks.id === book.id)) {
            return;
        }
        this.updateApi(book)
        BooksInState.push(book);
        this.setState({Books: BooksInState})
    }

    removeBook = (book) => {
        let BooksInState = [...this.state.Books]
        BooksInState = BooksInState.filter(currentBook => currentBook.id !== book.id);
        console.log(BooksInState)
        this.updateApi(book)
        BooksInState.push(book);
        console.log("updateAPI remove book")
        this.setState({Books: BooksInState})
    }

    updateApi = (book, newShelf) => {

        const oldShelf = book.shelf
        // console.log(oldShelf)

        BooksAPI.update(book, newShelf).then((response) => {
            if (response.error) {
                console.log("WE GOT AN ERROR")
                alert("WE ARE SORRY, WE ARE REVERTING YOUR CHANGE BACK")
                console.log(book)
                console.log(oldShelf)
                let BooksInState = [...this.state.Books]
                book.shelf = oldShelf
                const index = BooksInState.findIndex(b => {
                    return b.id === book.id
                })
                BooksInState.splice(index, 1, book)
                this.setState({Books: BooksInState, name: "TINA"})
            }
            console.log('bookAPI updating')
        })
    }

    render() {
        console.log("APP RENDR")
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
                )}
                />
            </div>
        )
    }
}

export default BooksApp