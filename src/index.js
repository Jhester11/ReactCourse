// Library
import React from "react";
import ReactDOM from "react-dom/client";

// Css path
import "./index.css";
const firstBook = {
    title: "Oh, the Places You'll Go!  ",
    author: "Dr. Seuss",
    img: './images/book-1.jpg',
};
const secondBook = {
    title: "Happy Place",
    author: "Emily Henry",
    img: './images/book-2.jpg',
};

// For component
const BookList = () => {
    return (
        <section className="booklist">
            <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
            <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
        </section>
    );
};

const Book = (props) => {
    console.log(props)
    return (
        <article className="book">
            <img src={props.img} alt={props.title}></img>;
            <h2>{props.title}</h2>;
            <h4>{props.author}</h4>
            {console.log(props)};
        </article>
    );
};

// For Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
