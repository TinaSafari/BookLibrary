import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Bookshelves from "./components/Bookshelves/Bookshelves";
import Search from "./components/Search/Search";

class BooksApp extends React.Component {
    state = {
        Books: []
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


    render() {
        console.log(this.state.Books)
        return (
            <div>
                <Route exact path='/' render={() => (
                    // TODO add bookshelves component here
                    <Bookshelves bookdata={this.state.Books}/>

                )}
                />
                <Route path='/search' render={({history}) => (
                    //TODO add search component here
                    <Search booksOnShelves={this.state.Books}/>
                    // alert('I am inside the search')
                )}
                />
            </div>
        )
    }
}

export default BooksApp