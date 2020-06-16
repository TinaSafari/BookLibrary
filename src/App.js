import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from "react-router-dom";
import Bookshelves from "./components/Bookshelves/Bookshelves";
import Search from "./components/Search/Search";

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        Books: [],
        showSearchPage: false
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
                <Route exact='/' render={() => (
                    // TODO add bookshelves component here
                    <Bookshelves bookdata={this.state.Books}/>

                )}
                />
                <Route path='/search' render={({history}) => (
                    //TODO add search component here
                    <Search searchlist={this.state.Books}/>
                    // alert('I am inside the search')
                    )}
                    />
            </div>
            )
         }
    }

export default BooksApp