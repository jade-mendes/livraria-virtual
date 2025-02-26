import axios from 'axios'
import BookCard from '../BookCard/BookCard'
import styles from './styles.module.css'
import { useState, useEffect } from "react"
import { BookCardType } from '../../types/BookCardType'



export default function CategoryRow(){
    const [booksRow, setBooksRow] = useState<BookCardType[]>([])

    useEffect(() => {
        axios.get('http://localhost:3001/livros?_limit=4genero=Best-sellers')
        .then(response => setBooksRow(response.data))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    return(
        <div className={styles.categoryContainer}>
            <div className={styles.categoryHeader}>
                <h3>Best-sellers</h3>
                <button>Ver mais</button>
            </div>
            <div className={styles.booksRow}>
                {booksRow.map((book) => (
                    <li  key={book.id}>
                        <BookCard id={book.id} cover={book.cover} title={book.title} author={book.author} price={book.price} />
                    </li>
                ))}
            </div>
        </div>
    )
}