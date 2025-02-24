import styles from './styles.module.css'
import bannerImage from '/assets/banner.jpeg'

export default function Banner(){
    return(
        <div className={styles.bannerContainer}>
            <img src={bannerImage} alt="Banner promocional"></img>
            <h2>50% de desconto <br/><span>nos livros do Paulo Coelho!</span></h2>
        </div>
    )
}