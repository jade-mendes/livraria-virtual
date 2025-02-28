import GenreRow from "../GenreRow/GenreRow";

export default function BookList(){
    return(
        <>
            <GenreRow rowName='Best-sellers' />
            <GenreRow rowName="Clássicos" />
        </>
    )
}