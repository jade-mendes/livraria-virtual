import { ChevronLeft } from 'lucide-react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom';

interface ButtonProps {
    innerText : string 
}

export default function BackToHomeButton({ innerText } : ButtonProps){
    return (
        <Link to={'/home'}>
            <div className={styles.buttonContainer}>
                <ChevronLeft />
                <h4>{innerText}</h4>
            </div>
        </Link>
    )
}