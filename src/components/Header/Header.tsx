import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import logo from '/assets/logo.svg'
import NavBar from '../NavBar/NavBar'

export default function Header(){
    return(
        <header className={styles.header}>
            <Link to="/home"><img src={logo} alt="Logo da livraria"></img></Link>
            <NavBar/>
        </header>
    )
}