import { BookCardType } from '../../types/BookCardType'
import styles from './styles.module.css'

export default function BookCard({cover, title, author, price}: BookCardType){
    return(
        <div className={styles.cardContainer}>
            <img className={styles.bookCover} src={cover} alt={`capa do livro ${title}`}></img>
            <div className={styles.bookInfo}>
                <div className={styles.bookInfo_text}>
                    <h4>{title}</h4>
                    <h5>{author}</h5>
                </div>
                <p className={styles.bookInfo_price}>R$ {String(price)}</p>
            </div>
        </div>
    )
}