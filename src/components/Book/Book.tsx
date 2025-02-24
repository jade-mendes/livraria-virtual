interface BookProps {
    title: string
    author: string
    description: string
}

export default function Book({title, author, description}: BookProps){
    return(
        <div>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{description}</p>
        </div>
    )
}