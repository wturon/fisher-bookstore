import React, { Component } from "react";
import "./Books.css";
import BookDisplay from "./BookDisplay";


export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217",
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331",
                },
                {
                    id: 3,
                    title: "The Big Bang",
                    author: "Nicole Frank",
                    isbn: "978-1942788332",
                },
                {
                    id: 4,
                    title: "Willy Wonka",
                    author: "Willy  Forsgren",
                    isbn: "978-1942788333",
                },
                {
                    id: 5,
                    title: "The Bible",
                    author: "Nicole Anderson",
                    isbn: "978-1942788334",
                },
                {
                    id: 6,
                    title: "The Book of James",
                    author: "Mark",
                    isbn: "978-1942788335",
                },
                {
                    id: 7,
                    title: "The Book of Mark",
                    author: "James",
                    isbn: "978-1942788336",
                },
                {
                    id: 8,
                    title: "Book",
                    author: "Book man",
                    isbn: "978-1942788337",
                }
            ]
        };
    }
  
  render(){
    return(
        <div className="Books">
            <div className="lander">
                <BookDisplay books={this.state.books} />
            </div>
        </div>
    );
  }
    
}