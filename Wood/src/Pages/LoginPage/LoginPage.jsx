import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Content } from "../../Components/Content/Content";
import { SignUp } from "./signup";
import { LoginContext } from "../../Components/LoginContext/LoginContext";
import style from "./LoginPage.module.scss"
import { Inputs } from "../../Components/Formular/Inputs";
import { Labels } from "../../Components/Formular/Label";
import { BsFillCheckCircleFill } from "react-icons/bs"


export const LoginPage = () => {

  // Henter funktionalitet fra useForm til at håndtere formularer
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  // Henter setUser-funktionen fra LoginContext til at opdatere brugeroplysninger
  const {setUser} = useContext(LoginContext)

  const [success, setSuccess] = useState("")
  const [loginTrue, setLoginTrue] = useState(true)
  // const regex = /^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$/

  // Funktion til at håndtere indsendelse af formular
  const onSubmit = (data, event) => {
    console.log(data);
    setSuccess("Du er nu logget ind!") // Viser en succesmeddelelse

    // Nulstil formularfelterne
    event.target.reset();

    const url = "http://localhost:4000/login"
    const body = new URLSearchParams()
    body.append('username', data.username)
    body.append('password', data.password)

    const options = {
      method: "POST",
      body: body
    }

    fetch(url, options)
    .then(res => res.json())
    .then(data => setUser(data))

  }

  if (loginTrue)
    return (
      <Content title="Login">
        <form className={style.login} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.loginwrapper}>
            <Labels htmlFor="email">
              <p>Brugernavn: <span>*</span></p>
              <Inputs
                type="email"
                id="email"
                {...register("username", { required: true, minLengt: 4, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
              />
              {errors.username?.type === "required" && (
                <span>Du skal udfylde Brugernavn</span>
              )}
              {errors.username?.type === "minLengt" && (
                <span>Du skal have et brugernavn længere end 4 bogstaver</span>
              )}
            </Labels>
            <Labels htmlFor="password">
              <p>Password: <span>*</span></p>
              <Inputs
                type="password"
                id="password"
                {...register("password", { required: true, minLengt: 4 })}
              />
              {errors.password?.type === "required" && (<span>Du skal udfylde Password</span>)}
              {errors.password?.type === "minLengt" && (<span>Du skal have et password længere end 4 bogstaver</span>)}
            </Labels>
          </div>
          <div className={style.btndiv}>
            <input type="submit" value="Login" />
            <button onClick={() => setLoginTrue(false)}>Sign Up</button>
            {success && (
            <p style={{ color: "green" }}>
              {success}
              <span><BsFillCheckCircleFill/></span>
            </p>
          )} 
          </div>
          
        </form>
        
      </Content>
    );
  else
      return (
        <Content>
          <SignUp/>
          <button className={style.signupbtn} onClick={() => setLoginTrue(true)}>Login</button>
        </Content>
        )

}