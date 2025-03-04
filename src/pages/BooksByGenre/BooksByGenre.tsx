import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import BackToHomeButton from "../../components/BackToHomeButton/BackToHomeButton";

export default function BooksByGenre(){
    const [books, setBooks] = useState([]);
    let params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/livros?genero=${params.genreName}`)
        .then(response => setBooks(response.data))
        .catch(error => {console.error('Algo deu errado: ' + error)})
    }, []);

    if (!books) return (<h4> Gênero não encontrado</h4>)
    else return (
        <div>
            <BackToHomeButton innerText={params.genreName!}/>
            <p>Lista de livros do gênero {params.genreName}</p>

        </div>
    )
}