import style from "./Header.module.scss"
import { NavBar } from "../NavBar/NavBar"
import { FaShoppingBasket } from "react-icons/fa"
import { NavLink } from 'react-router-dom'




export const Header = () => {


    return (
        <header className={style.header}>
            <span><NavLink to='/'>WALLYWOOD</NavLink></span>
            <div>
                <FaShoppingBasket className={style.cart}/>
                <NavBar/>
            </div>
            
        </header>
    )

}