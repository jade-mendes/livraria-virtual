import { UserRound, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import HeaderButton from "../HeaderButton/HeaderButton";

export default function NavBar(){
    return(
        <nav>
            <NavLink to="#">
                <HeaderButton>
                    <UserRound/>
                </HeaderButton>
            </NavLink>
                
            <NavLink to="/cart">
                <HeaderButton>
                    <ShoppingCart/>
                </HeaderButton>
            </NavLink>  
        </nav>
    )
}