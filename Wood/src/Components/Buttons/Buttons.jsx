import style from "./Buttons.module.scss"


export const Buttons = ({clickEvent, children}) => {

    return(
        <button className={style.button} onClick={clickEvent}>{children}</button>
    )
}

