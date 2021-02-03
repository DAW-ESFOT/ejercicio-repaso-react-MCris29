import React, {useState, useEffect} from "react";
import '../styles/App.css';
import Card from "./CardBooks";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("https://stark-spire-22280.herokuapp.com/api/books");
            const json = await response.json();
            console.log("json", json);
            setBooks(json.data);
            return json;
        }

        fetchBooks();
    }, []);

    return (
        <>
            <h1 style={{margin: '15px'}}>
                Lista de libros
            </h1>
            <div
                className={'container'}
            >
                {books.map((book) => (
                    <Card
                        bookData={book}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
