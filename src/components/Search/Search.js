import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'

class Search extends Component {

    state = {
        query: '',
        searchResult: []
    }
    updateQuery = (queryFromSearchBar) => {
        this.setState(() => ({
            query: queryFromSearchBar.trim()
        }))
        this.callSearchBookAPI(queryFromSearchBar)
    }

    callSearchBookAPI = (queryToSearch) => {
       BooksAPI.search(queryToSearch)
           .then((Books) => {
               this.setState( () => ({
                       Books
                   }))
           } )
    }

    // clearQuery = () => {
    //     this.updateQuery('')
    // }
    render() {
        const {query} = this.state
        const {searchlist} = this.props

        // const search = query === ''
        //     ? searchlist
        //     : searchlist.filter((c) => (
        //         c.name.toLowerCase().includes(query.toLowerCase())
        //     ))

        console.log(searchlist)
        console.log(this.state)
        return (

            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        className="close-search"
                        to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or authors"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">

                </div>
            </div>


        )
    }

}

export default Search