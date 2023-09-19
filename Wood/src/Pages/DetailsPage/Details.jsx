import { useEffect, useState } from "react"
import { Buttons } from "../../Components/Buttons/Buttons"
import { NavLink, useParams } from "react-router-dom"
import style from "./Details.module.scss"
import { BsFillEmojiSmileFill } from "react-icons/bs"


export const Details = () => {

    // Tilstand til at opbevare detaljer om posteren
    const [details, setDetails] = useState([])
    const {slug} = useParams()

    // Henter slug fra URL-parametre
    useEffect(() => {
        // URL for at hente posterens detaljer baseret på slug
        const urlDetails = `http://localhost:4000/poster/details/${slug}`
        fetch(urlDetails)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    // Henter beskrivelse fra posterens detaljer
    let description = details.description

    return (
      <section className={style.details}>
        {details && (
          <figure>
            <img src={details.image} alt={details.name} />
            <article>
              <h3>{details.name}</h3>
              {details.genres?.map((item, index) => {
                return <p key={index}>Genre: {item.title}</p>;
              })}
              <p>
                Beskrivelse: {description ? description : "Kommer snart..."}
              </p>
              <p>
                Størrelse: {details.width} x {details.height}
              </p>
              <h4 className={style.pricetext}>Kr. {details.price}</h4>
              <div className={style.btndiv}>
                <div>
                  <input type="number" className={style.amount} />
                  <input type="sumbit" className={style.cart} value="Læg i kurv" />
                </div>
                <p style={{ color: details?.stock === 0 ? 'red' : 'green' }}><span><BsFillEmojiSmileFill /></span> Lager: {details.stock}</p>
              </div>
              <div className={style.button}>
                <Buttons>
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "#524641",
                      padding: "6px 14px",
                    }}
                    to="/posters"
                  >
                    Tilbage
                  </NavLink>
                </Buttons>
              </div>
            </article>
          </figure>
        )}
      </section>
    );

}