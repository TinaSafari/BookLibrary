import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'

class Search extends Component {

    state = {
        query: '',
        searchResult: []
    }


    updateQuery = (event) => {
        this.setState({query: event.target.value})
        this.callSearchBookAPI(this.state.query)
        }


    callSearchBookAPI = (queryToSearch) => {
        BooksAPI.search(queryToSearch)
            .then((searchResult) => {
                this.setState(() => ({
                    searchResult
                }))
            })
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

                </div>
            </div>


        )
    }

}

export default Search