import style from "./Content.module.scss"
import { Title } from "../TitlePage/TitlePage";




export const Content = ({children, title}) => {




    return (
      <>
        <div className={style.contentwrapper}>
          <Title title={title}/>
          <section>{children}</section>
        </div>
      </>
    );

}