import style from "./ErrorPage.module.scss"
import { Link } from "react-router-dom"
import { Content } from "../../Components/Content/Content"
import error from "../../assets/Image/error.gif"

export const ErrorPage = () => {

  // Stil for baggrundsbillede
  const backgroundImageStyle = {
    backgroundImage: `url(${error})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

    return (
      <Content title="404 Not found">
        <div className={style.errorwrapper} style={backgroundImageStyle}>
          <h2>404</h2>
        </div>
        <article className={style.errormessage}>
          <h3>Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>
          <Link to="/">Go to Home</Link>
        </article>
      </Content>
    );
}