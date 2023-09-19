import style from "./HomePage.module.scss"
import { Content } from "../../Components/Content/Content"
import curtian from "../../assets/Image/cinema-curtian.avif"
import { useEffect, useState } from "react"
import { Buttons } from "../../Components/Buttons/Buttons"
import { NavLink } from "react-router-dom"

export const HomePage = () => {

  // Tilstand til at opbevare posterdata
    const [ post, setPost] = useState([])

    // Effekt, der henter data fra en API-endepunkt, når komponenten indlæses
    useEffect(() => {
      const url = "http://localhost:4000/poster/list?limit=2"
      fetch(url)
      .then(res => res.json())
      .then(data => setPost(data))
    }, [])


    return (
      <section className={style.homepage}>
        <div className={style.curtainwrapper}>
          <img src={curtian} alt="Curtians" />
        </div>
        <Content title="Sidste nyt…">
          <div className={style.homecontent}>
            {post?.map((item, index) => {
              return (
                <div className={style.poster} key={index}>
                  <img src={item.image} alt={item.name} />
                  <article>
                    <h2>{item.name}</h2>
                    <p>Genre: {item.genres[0].title}</p>
                    <div className={style.button}>
                       <Buttons><NavLink 
                    style={{textDecoration: "none", color:"#524641" }} 
                    to={`/details/${item.slug}`} >Læs mere</NavLink></Buttons>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </Content>
      </section>
    );

}