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