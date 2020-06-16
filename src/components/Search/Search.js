import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from "../Book/Book";

class Search extends Component{
    static propTypes = {
        Books: PropTypes.array.isRequired,
        shelfStatus: PropTypes.func.isRequired,
    }
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    clearQuery = () => {
        this.updateQuery('')
    }
    render() {
        const { query } = this.state
        const { Books, shelfStatus } = this.props

        const showSearchPage = query === ''
            ? Books
            : Books.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        console.log(this.props.searchlist)
        return(
            <div>
                <Book bookProp={this.props.searchlist}/>
                <Link
                    to='/search'
                    className='open-search'
                >Add a book</Link>
            </div>

        // {this.props.showSearchPage ? (
        //     <div className="search-books">
        //         <div  className="search-books-bar">
        //             <button className="close-search"
        //                     onClick={() => this.setState({showSearchPage: false})}>Close
        //             </button>
        //             <div className="search-books-input-wrapper">
        //                 <input type="text" placeholder="Search by title or authors"/>
        //         </div>
        //         <div className="search-books-results">
        //             <ol className="books-grid"></ol>
        //         </div>
        //     </div>
        // ) : (
        //     <div className="list-books">
        //         <div className="list-books-title">  }
        //
        //
        // </div>


            )
    }

}

export default Search