import { BookType } from '../../types/BookType'

const books: BookType[] = [
    {
        id: 1,
        title: "Misery",
        author: "Stephen King",
        description: "A book about something"

    },
    {
        id: 2,
        title: "Frankenstein",
        author: "Mary Shelley",
        description: "A book about something"
    },
    {
        id: 3,
        title: "Carmilla",
        author: "Sheridan Le Fanu",
        description: "A book about something"
    }
]

export default function BookList(){
    return(
        <>
            <h1>Nossos Livros</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        "{book.title}"", de {book.author} <button>Ver mais</button>
                    </li>
                ))}
            </ul>
        </>
    )
}