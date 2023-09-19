import { Outlet } from "react-router-dom"
import style from "./MainLayout.module.scss"
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"





export const MainLayout = () => {


    return (
        <main className={style.layout}>
            <Header/>
                <Outlet/>
            <Footer/>
        </main>
    )
}