import axios from 'axios'
import BookCard from '../BookCard/BookCard'
import styles from './styles.module.css'
import { useState, useEffect } from "react"
import { BookCardType } from '../../types/BookCardType'
import { Link } from 'react-router-dom'

interface rowProps {
    rowName: string
}


export default function GenreRow({rowName} : rowProps){
    const [booksRow, setBooksRow] = useState<BookCardType[]>([])

    function getFirstFourBooks(books : BookCardType[]) : BookCardType[]{
        let fourBookRow : BookCardType[] = [];
        const limit = 4;
        let i = 0;
        for (i = 0; i < limit; i++){
            fourBookRow.push(books[i]);
        }
        return fourBookRow;
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/livros?genero=${rowName}`)
        .then(response => setBooksRow(getFirstFourBooks(response.data)))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    return(
        <div className={styles.rowContainer}>
            <div className={styles.rowHeader}>
                <h3>{rowName}</h3>
                <button>Ver mais</button>
            </div>
            <div className={styles.booksRow}>
                {booksRow.map((book) => (
                    <li key={book.id}>
                        <Link to={`/book/${book.id}`}> <BookCard cover={book.capa} title={book.titulo} author={book.autor} price={book.preco} /> </Link>
                    </li>
                ))}
            </div>
        </div>
    )
}