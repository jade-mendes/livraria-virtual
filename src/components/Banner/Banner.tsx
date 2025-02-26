import styles from './styles.module.css'
import bannerImage from '/assets/banner.jpeg'

export default function Banner(){
    return(
        <div className={styles.bannerContainer}>
            <img className={styles.bannerImage} src={bannerImage} alt="Livros do Paulo Coelho"></img>
            <div className={styles.bannerText}>
                <h2 className={styles.bannerTitle}>25% de desconto</h2>
                <p className={styles.bannerSubtitle}>nos livros do Paulo Coelho!</p>
            </div>
        </div>
    )
}