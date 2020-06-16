import React, { Component } from 'react'
import Bookshelf from "./Bookshelf/Bookshelf";

class Bookshelves extends Component {
    render() {
        console.log(this.props.bookdata)
        return (
            <div>

                <Bookshelf bookslist={this.props.bookdata} shelfindicator='currentlyReading'/>
                <Bookshelf bookslist={this.props.bookdata} shelfindicator='wantToRead' />
                <Bookshelf bookslist={this.props.bookdata} shelfindicator='read' />


            </div>
        )
    }
}


export default Bookshelves





