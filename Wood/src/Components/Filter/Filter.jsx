import { useEffect, useState } from "react"
import style from "./Filter.module.scss"
import { NavLink } from 'react-router-dom'

// Bliver ikke brugt var lavet til aside i Posters
export const Filter = () => {
    
  // State hook til at gemme genrer fra API'en
    const [genres, setGenres] = useState([])
    
    // En liste med genrer og deres tilhørende slug (URL-segment)
    const filterArray = [
        { genre: 'Action', slug: 'action' },
        { genre: 'Dokumentar', slug: 'dokumentar' },
        { genre: 'Drama', slug: 'drama' },
        { genre: 'Gysere', slug: 'gysere' },
        { genre: 'Karatefilm', slug: 'karatefilm' },
        { genre: 'Komedie', slug: 'komedie' },
        { genre: 'Krigsfilm', slug: 'krigsfilm' },
        { genre: 'Krimi - Thriller', slug: 'krimi-thriller' }
    ]

    // funktionen henter genrer fra API'en ved komponentens indlæsning
    useEffect(() => {
        const urlGenres = "http://localhost:4000/genre"
        fetch(urlGenres)
        .then(res => res.json())
        .then(data => setGenres(data))
    }, [])
    

    return (
        <div className={style.filter}>
          <h2>Filtre</h2>
          <h3>Genre</h3>
          {/* Hjemmeside rigtige genre */}
          {/* <ul>
            {filterArray.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={`/poster/list/${item.slug}`}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#8f320d" : "#D97852",
                      };
                    }}
                  >
                    {" "}
                    {item.genre}
                  </NavLink>
                </li>
              );
            })}
          </ul> */}

            {/* Url genre */}
          <ul>
            {genres?.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={`/poster/list/${item.slug}`}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#8f320d" : "#D97852",
                      };
                    }}
                  >
                    {" "}
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <h3>Prisområde</h3>
          <div className={style.price}>
                    <input type="number" defaultValue='0' />
                    <span> - </span>
                    <input type="number" defaultValue='3800' />
                    <span>kr</span>
                </div>
        </div>
    );


}