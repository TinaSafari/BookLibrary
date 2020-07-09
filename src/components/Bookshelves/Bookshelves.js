import React, {Component} from 'react'
import Bookshelf from "./Bookshelf/Bookshelf";
import {Link} from "react-router-dom";

class Bookshelves extends Component {
    render() {
        console.log(this.props.bookdata)
        return (
            <div>

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div>
                    <Bookshelf bookslist={this.props.bookdata}
                               shelfindicator='currentlyReading'
                               onUpdate={this.props.onUpdate}/>

                    <Bookshelf bookslist={this.props.bookdata}
                               shelfindicator='wantToRead'
                               onUpdate={this.props.onUpdate}/>

                    <Bookshelf bookslist={this.props.bookdata}
                               shelfindicator='read'
                               onUpdate={this.props.onUpdate}/>
                    <Bookshelf bookslist={this.props.bookdata}
                               shelfindicator='NONE'
                               onUpdate={this.props.onUpdate}/>
                    <div>

                        <Link
                            to='/search'
                            className='open-search'
                        >Add a book</Link>
                    </div>
                </div>
            </div>


        )
    }
}


export default Bookshelves





