import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from "../Book/Book";

class Search extends Component {

    state = {
        query: '',
        rawUserInput: '',
        searchResult: []
    }

    updateQuery = (event) => {
        // we lost space here
        this.setState({rawUserInput: event.target.value})
        const trimmedUserInput = event.target.value.trim()
        this.setState({query: trimmedUserInput})
        this.callSearchBookAPI(trimmedUserInput)
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
        console.log(this.state)
        const {rawUserInput} = this.state
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
                                value={rawUserInput}
                                onChange={this.updateQuery}/>
                        </form>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchResult.map(book => {
                                return <li key={book.id}><Book bookProp={book}/></li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search