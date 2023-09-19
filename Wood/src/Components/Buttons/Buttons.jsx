import style from "./Buttons.module.scss"

// Button component
export const Buttons = ({clickEvent, children}) => {

    return(
        <button className={style.button} onClick={clickEvent}>{children}</button>
    )
}

