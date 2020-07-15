import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Bookshelves from "./components/Bookshelves/Bookshelves";
import Search from "./components/Search/Search";

class BooksApp extends Component {

    state = {
        Books: []
    }

    componentDidMount = () => {
        BooksAPI.getAll()
            .then((Books) => {
                this.setState(() => ({
                    Books
                }))
            })
    }

    updateBookshelf = (book, newShelf) => {
        let BooksInState = [...this.state.Books]
        const index = BooksInState.findIndex(b => {
            return b.id === book.id
        })
        //if findIndex doesn't find a book it will return -1
        if (index === -1) {
            return;
        }
        this.updateApi(book, newShelf)
        book.shelf = newShelf
        BooksInState.splice(index, 1, book)
        this.setState({Books: BooksInState})
    }

    addBookOnShelf = (book, newShelf) => {
        let BooksInState = [...this.state.Books]
        // If we already have it, don't do anything
        if (this.state.Books.find(existingBooks => existingBooks.id === book.id)) {
            return;
        }
        this.updateApi(book, newShelf)
        book.shelf = newShelf
        BooksInState.push(book);
        this.setState({Books: BooksInState})
    }

    removeBook = (book, newShelf) => {
        let BooksInState = [...this.state.Books]
        if(this.state.Books.filter(currentBook => currentBook.id !== book.id)){}
        this.updateApi(book, newShelf)
        book.shelf = newShelf
        BooksInState.push(book);
        this.setState({Books: BooksInState})
    }

    updateApi = (book, newShelf) => {
        const oldShelf = book.shelf
        // console.log(oldShelf)
        BooksAPI.update(book, newShelf).then((response) => {
            if (response.error) {
                alert("WE ARE SORRY, WE ARE REVERTING YOUR CHANGE BACK")
                let BooksInState = [...this.state.Books]
                book.shelf = oldShelf
                const index = BooksInState.findIndex(b => {
                    return b.id === book.id
                })
                BooksInState.splice(index, 1, book)
                this.setState({Books: BooksInState, name: "TINA"})
            }
        })
    }

    render() {
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