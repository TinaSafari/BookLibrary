import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from "../Book/Book";

//This search component has a prop called booksOnShelves that contains list of books on all shelves
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
                .then((searchResultFromServer) => {
                    if (searchResultFromServer.error) {
                        this.setState({searchResult: []})
                    } else {
                        console.log(searchResultFromServer)
                        this.setState({searchResult: searchResultFromServer})
                    }
                })
        }
    }

    render() {
        console.log(this.state)
        console.log(this.props)
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
                                let shelfIndicator = "NONE"
                                const index = this.props.booksOnShelves.findIndex(b => {
                                    return b.id === book.id
                                })
                                if (index !== -1) {
                                    shelfIndicator = this.props.booksOnShelves[index].shelf
                                }
                                return <li key={book.id}><Book bookProp={book}
                                                               shelfIndicator={shelfIndicator}
                                                               onAdd={this.props.onAdd}
                                                               onUpdate={this.props.onUpdate}
                                                               onRemove={this.props.onRemove}
                                />
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search