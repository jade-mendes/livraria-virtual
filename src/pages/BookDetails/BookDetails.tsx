import axios from "axios"
import styles from './styles.module.css'
import { useEffect, useState } from "react"
import { BookType } from "../../types/BookType"
import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import BackToHomeButton from "../../components/BackToHomeButton/BackToHomeButton";

export default function BookDetails(){
    const [book, setBook] = useState<BookType>()
    let params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/livros/${params.bookId}`)
        .then(response => setBook(response.data))
        .catch(error => {console.error('Algo deu errado: ' + error)})
    }, [])

    if (!book) return (<h4> Livro não encontrado</h4>)
    else return(
        <section>
            <BackToHomeButton innerText="Detalhes do livro" />
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
            <button className={styles.accentButton}> 
                <span>R$ {formatPrice(book?.preco)}</span> 
                Adicionar ao carrinho
            </button>     
        </section>
    )
}