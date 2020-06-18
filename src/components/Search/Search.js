import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from "../Book/Book";

class Search extends Component {

    state = {
        query: '',
        searchResult: []
    }

    updateQuery = (event) => {
        const userInput = event.target.value.trim()
        this.setState({query: userInput})
        this.callSearchBookAPI(userInput)
    }

    callSearchBookAPI = (userInput) => {
        if (userInput.length === 0) {
            this.setState({searchResult: []})
        } else {
            BooksAPI.search(userInput)
                .then((searchResult) => {
                    if (searchResult.error) {
                        this.setState({searchResult: []})
                    } else {
                        this.setState({searchResult: searchResult})
                    }
                })
        }
    }

    render() {
        const {query} = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <form>
                            <input
                                type="text"
                                placeholder="Search by title or authors"
                                value={query}
                                onChange={this.updateQuery}/>
                        </form>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchResult.map(book => {
                                return <li><Book bookProp={book}
                                /></li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search