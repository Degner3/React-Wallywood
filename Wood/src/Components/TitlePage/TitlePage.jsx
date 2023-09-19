import style from "./TitlePage.module.scss"

export const Title = (props) => {

    return (
        <h1 className={style.title}>{props.title}</h1>
    )
}