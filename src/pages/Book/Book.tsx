import axios from "axios"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { BookType } from "../../types/BookType"
import { useParams } from "react-router-dom";

export default function Book(){
    const [book, setBook] = useState<BookType>()
    let params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/livros/${params.bookId}`)
        .then(response => setBook(response.data))
        .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    return(
        <div>
            <h4>Detalhes do livro</h4>
            <div className={styles.bookInfoContainer}>
                <img className={styles.bookInfo_cover} src={book?.capa}></img>
                <div className={styles.bookInfo_text}>
                    <div id={styles.titleAndAuthor}>
                        <h2>{book?.titulo}</h2>
                        <h3>{book?.autor}</h3>
                    </div>
                    
                    <h4>Sinopse</h4>
                    <p>{book?.sinopse}</p>
                    
                </div>
            </div>
            <span>R$ {book?.preco}</span>
            <button className={styles.accentButton}>Adicionar ao carrinho</button>
        </div>
    )
}