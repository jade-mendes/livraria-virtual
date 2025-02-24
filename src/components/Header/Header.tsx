import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <h1>Header</h1>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/book">Book</Link>
            </nav>
        </header>
    )
}