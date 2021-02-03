import React, {useState, useEffect} from "react";
import {Pagination} from 'antd';
import '../styles/App.css';
import Card from "./CardBooks";

function App() {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("https://stark-spire-22280.herokuapp.com/api/books?page=" + page);
            const json = await response.json();
            console.log("json", json);
            setBooks(json.data);
            return json;
        }

        fetchBooks();
    }, [page]);

    const handlePage = (current) => {
        setPage(current);
    }

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
            <div className={'container'}>
                <Pagination
                    defaultCurrent={1}
                    total={30}
                    onChange={handlePage}
                />
            </div>
        </>
    );
}

export default App;
