import imgPath  from '/assets/login-banner.jpeg'
import logo from '/assets/logo.svg'
import styles from './styles.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();
    const loginSchema = z.object({
        email: z.string().nonempty('O e-mail não pode ser vazio').refine
        (value => z.string().email().safeParse(value).success, {
            message: 'E-mail inválido'
        }),
        password: z.string().nonempty('A senha não pode ser vazia').min(6, 'A senha deve ter, no mínimo, 6 caracteres'),

    })

    const { register, handleSubmit, reset, formState: {errors, isSubmitting} } = useForm({
        resolver: zodResolver(loginSchema)
    });

    async function logUser(){
        await new Promise(resolve => setTimeout(resolve, 2000));
        reset();
        navigate('/home');
    }

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

                    <form onSubmit={handleSubmit(logUser)} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label>E-mail</label>
                            <input 
                                type='email' 
                                placeholder='Digite aqui seu e-mail'
                                {...register('email')}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Senha</label>
                            <input 
                                type='password' 
                                placeholder='Digite aqui sua senha'
                                {...register('password')}
                            />
                        </div>
                        <div className={styles.buttonsGroup}>
                            <button disabled={isSubmitting} type="submit" className={styles.loginButton}>
                                {isSubmitting ? 'Carregando...' : 'Entrar'}
                            </button>    
                            <button type="button" className={styles.registerButton}>Cadastre-se</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}