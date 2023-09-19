import style from "./TitlePage.module.scss"


// h1 på alle pages
export const Title = (props) => {

    return (
        <h1 className={style.title}>{props.title}</h1>
    )
}