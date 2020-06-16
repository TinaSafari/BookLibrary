import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import Bookshelves from "./components/Bookshelves/Bookshelves";

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
                    <Bookshelves bookdata={this.state.Books} />

                )}
                />
                <Route path='/search' render={({ history }) => (
                    //TODO add search component here
                    alert('I am inside the search')
                )}

                />
            </div>
            // <div className="open-search">
            //     {/*<button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>*/}
            //     <Link
            //         to='/search'
            //         className='open-search'
            //     >Add a book</Link>
            // </div>
        )
    }
}

export default BooksApp

//     {this.state.showSearchPage ? (
//         <div className="search-books">
//
//             <div  className="search-books-bar">
//                 <button className="close-search"
//                         onClick={() => this.setState({showSearchPage: false})}>Close
//                 </button>
//                 <div className="search-books-input-wrapper">
//                     {/*
//       NOTES: The search from BooksAPI is limited to a particular set of search terms.
//       You can find these search terms here:
//       https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
//
//       However, remember that the BooksAPI.search method DOES search by title or authors. So, don't worry if
//       you don't find a specific authors or title. Every search is limited by search terms.
//     */}
//                     <input type="text" placeholder="Search by title or authors"/>
//
//                 </div>
//             </div>
//             <div className="search-books-results">
//                 <ol className="books-grid"></ol>
//             </div>
//         </div>
//     ) : (
//         <div className="list-books">
//             <div className="list-books-title">
//                 <h1>MyReads</h1>
//             </div>
// <div className="list-books-content">
//     <div>
//         <Route exact='/' render={({history}) => (
//             <Bookshelf booksProp={this.state.Books} shelfProp='currentlyReading'/>
//             <Bookshelf booksProp={this.state.Books} shelfProp='wantToRead' />
//             <Bookshelf booksProp={this.state.Books} shelfProp='read' />
//
//             )}
//         />
//     </div>
// </div>

// </div>
// )}
// </div>
// )
// }
// }


