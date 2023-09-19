import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Content } from "../../Components/Content/Content";
import { Buttons } from "../../Components/Buttons/Buttons"
import style from "./PostersPage.module.scss";

export const PostersPage = () => {

  const [poster, setPoster] = useState([]);
  const [genres, setGenres] = useState([]);
  const [slug, setSlug] = useState("drama");
  // const { user } = useContext(LoginContext)
  

  useEffect(() => {
    //Plakater under en genre
    const url = `http://localhost:4000/poster/list/${slug}?limit=30`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPoster(data));

    //Fetcher genres
    const urlGenres = "http://localhost:4000/genre";
    fetch(urlGenres)
      .then((res) => res.json())
      .then((data) => setGenres(data));
  }, [slug]);


  // function AddToCart(id) {
  //   const url = "http://localhost:4000/cart"

  //   const body = new URLSearchParams()
  //   body.append("poster_id", id)
  //   body.append("quantity", '1')
  //   const options = { method: "POST", body: body, headers: { Authorization: `Bearer ${user.access_token}` } }

  //   fetch(url, options).then(res => res.json()).then(data => console.log(data))

  // }


  return (
    <Content title="Plakater">
      <section className={style.posterwrapper}>
        <div className={style.select}>
          <select>
            <option>Sortér</option>
            <option>Pris - stigende</option>
            <option>Pris - faldene</option>
            <option>Titel</option>
          </select>
        </div>

        <div>
          <aside className={style.filter}>
            <h2>Filtre</h2>
            <h3>Genre</h3>
            {genres && (
              <ul>
                {genres?.map((item, index) => {
                  return (
                    <li key={index}>
                        <NavLink
                          onClick={() => setSlug(item.slug)}
                          style={({ isActive }) => {
                            return {
                              color: isActive ? "#8f320d" : "#D97852",
                            };
                          }}
                        >
                          {item.title}
                        </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
            <h3>Prisområde</h3>
            <div className={style.price}>
              <input type="number" defaultValue="0" />
              <span> - </span>
              <input type="number" defaultValue="3800" />
              <span>kr</span>
            </div>
          </aside>
          <div className={style.poster}>
            {poster?.map((item, index) => {
              return (
                <section
                  key={index}
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={item.image} alt={item.name} />
                  <h5>{item.name}</h5>
                  <p>kr. {item.price}</p>
                  <div className={style.btndiv}>
                    <Buttons><NavLink to={`/details/${item.slug}`} >Læg i kurv</NavLink></Buttons>
                  </div>
                  {/* <Buttons clickEvent={() => AddToCart(item.id)}>
                    Læg i kurv
                  </Buttons> */}
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </Content>
  );
};
