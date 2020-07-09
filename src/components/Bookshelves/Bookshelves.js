import React, {Component} from 'react'
import Bookshelf from "./Bookshelf/Bookshelf";
import {Link} from "react-router-dom";

class Bookshelves extends Component {
    render() {
        console.log(this.props.bookData)
        return (
            <div>

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div>
                    <Bookshelf bookslist={this.props.bookData}
                               shelfindicator='currentlyReading'
                               onUpdate={this.props.onUpdate}
                               onAdd={this.props.onAdd}
                               onRemove={this.props.onRemove}/>

                    <Bookshelf bookslist={this.props.bookData}
                               shelfindicator='wantToRead'
                               onUpdate={this.props.onUpdate}
                               onAdd={this.props.onAdd}
                               onRemove={this.props.onRemove}/>

                    <Bookshelf bookslist={this.props.bookData}
                               shelfindicator='read'
                               onUpdate={this.props.onUpdate}
                               onAdd={this.props.onAdd}
                               onRemove={this.props.onRemove}/>

                    <Bookshelf bookslist={this.props.bookData}
                               shelfindicator='NONE'
                               onUpdate={this.props.onUpdate}
                               onAdd={this.props.onAdd}
                               onRemove={this.props.onRemove}/>
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





