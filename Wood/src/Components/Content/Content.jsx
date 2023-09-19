import style from "./Content.module.scss"
import { Title } from "../TitlePage/TitlePage";

// Content/wrapper til alle pages
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