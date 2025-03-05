import imgPath  from '/assets/login-banner.jpeg'
import logo from '/assets/logo.svg'
import styles from './styles.module.css'

export default function Login(){
    return (
        <div className={styles.loginContainer}>

            <div id={styles.loginImage}>
                <img src={imgPath} alt='livros empilhados em uma livraria aconchegante'/>
            </div>

            <div className={styles.loginPanel}>
                <img src={logo} alt='logo da livraria'></img>
                <div className={styles.textAndFormGroup}>
                    <h4>Bem vindo(a)!</h4>
                    <h2>Entre na sua conta</h2>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>E-mail</label>
                            <input type='email' placeholder='Digite aqui seu e-mail'/>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Senha</label>
                            <input type='password' placeholder='Digite aqui sua senha'/>
                        </div>
                        <div className={styles.buttonsGroup}>
                            <button className={styles.loginButton}>Entrar</button>
                            <button className={styles.registerButton}>Cadastre-se</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}