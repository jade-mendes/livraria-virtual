import styles from './styles.module.css'

const testImage : string = 'https://a-static.mlcdn.com.br/800x560/livro-o-codigo-da-vinci-robert-langdon-livro-2/magazineluiza/089299600/9d4dbf21f0f6636ab5cb3952da44ca63.jpg'
const bookTitle : string = 'O Código Da Vinci'
const bookAuthor : string = 'Dan Brown'
const bookPrice : number = 39.90

export default function BookCard(){
    return(
        <div className={styles.cardContainer}>
            <img className={styles.bookCover} src={testImage} alt={`capa do livro ${bookTitle}`}></img>
            <div className={styles.bookInfo}>
                <div className={styles.bookInfo_text}>
                    <h4>{bookTitle}</h4>
                    <h5>{bookAuthor}</h5>
                </div>
                <p className={styles.bookInfo_price}>R$ {String(bookPrice)}</p>
            </div>
        </div>
    )
}