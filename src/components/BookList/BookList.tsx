import axios from 'axios'
import GenreRow from "../GenreRow/GenreRow";
import styles from './styles.module.css'
import { useState, useEffect } from "react"

interface Book {
    id: string;
    titulo: string;
    autor: string;
    genero: string;
    preco: number;
    sinopse: string;
    capa: string;
}

export default function BookList(){
    const [genres, setGenres] = useState<string[]>([]);

    useEffect(() => {
        axios.get<Book[]>('http://localhost:3001/livros')
        .then(response => {
            const books = response.data;
            const uniqueGenres : string[] = Array.from(new Set(books.map(book  => book.genero)));
            setGenres(uniqueGenres);
        })
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    return(
        <div className={styles.bookList}>
            <ul>
                {genres.map((genre, index) => (
                    <li key={index}>
                        <GenreRow rowName={genre} />
                    </li>
                ))}
            </ul>
        </div>
    )
}