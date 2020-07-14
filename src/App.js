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

    updateBookshelf = (book) => {
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
        this.updateApi(book)
        BooksInState.splice(index, 1, book)
        this.setState({Books: BooksInState})
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
        console.log(book.id)
        let BooksInState = [...this.state.Books]
        console.log(BooksInState)
        this.updateApi(book)
        BooksInState = BooksInState.filter(currentBook => currentBook.id !== book.id);
        console.log(BooksInState)
        this.setState({Books: BooksInState})
    }

    // book with updated shelf
    updateApi = (book) => {
        const previousShelf = [...this.state.Books]
        BooksAPI.update(book, book.shelf).then((response) => {
            console.log(response)
            if(response.error){
                return previousShelf
                // need to rollback the state change
            }
            console.log('bookAPI updating')
        }) }

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