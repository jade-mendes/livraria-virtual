import { ChevronLeft } from 'lucide-react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

export default function BackToHomeButton(){
    return (
        <Link to={'/'}>
            <div className={styles.buttonContainer}>
                <ChevronLeft />
                <h4>Detalhes do livro</h4>
            </div>
        </Link>
    )
}