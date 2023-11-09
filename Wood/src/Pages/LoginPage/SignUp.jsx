import { Content } from "../../Components/Content/Content";
import { useForm } from "react-hook-form";
import { Inputs } from "../../Components/Formular/Inputs";
import { Labels } from "../../Components/Formular/Label";
import style from "./SignUp.module.scss"
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs"



export const SignUp = (props) => {

  // Henter funktionalitet fra useForm til at håndtere formularer
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Tilstand til at opbevare en succesmeddelelse
  const [success, setSuccess] = useState("") 

  // Funktion til at håndtere indsendelse af formular
  const onSubmit = (data, event) => {
    // console.log(data);
    setSuccess("Du har nu oprettet et login!")

    // Nulstil formularfelterne
    event.target.reset();

    const url = "http://localhost:4000/users"
    const body = new URLSearchParams()
    body.append('firstname', data.firstname)
    body.append('lastname', data.lastname)
    body.append('email', data.email)
    body.append('password', data.password)
    body.append('org_id', "1")
    body.append("is_active", "1")

    const options = {
      method: "POST",
      body: body,

    }

    fetch(url, options)
    .then(res => res.json())
    .then(data => console.log(data))

  }

    return (
      <Content title="Sign Up">
        <form className={style.signup} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.signupwrapper}>
            <Labels htmlFor="firstname">
              <p>Fornavn: <span>*</span></p>
              <Inputs
                {...register("firstname", { required: true, pattern: /^[A-Za-z]+$/i })}
                type="username"
                id="firstname"
              />
              {errors.firstname?.type === "required" && (
                <span>Du skal udfylde Fornavn</span>
              )}
            </Labels>
            <Labels htmlFor="lastname">
              <p>Efternavn: <span>*</span></p>
              <Inputs
                {...register("lastname", { required: true, pattern: /^[A-Za-z]+$/i })}
                type="username"
                id="lastname"
              />
              {errors.lastname?.type === "required" && (
                <span>Du skal udfylde Efternavn</span>
              )}
            </Labels>
            <Labels htmlFor="email">
              <p>Email: <span>*</span></p>
              <Inputs
                {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                type="username"
                id="email"
              />
              {errors.email?.type === "required" && (
                <span>Du skal udfylde Email</span>
              )}
            </Labels>
            <Labels htmlFor="password">
              <p>Password: <span>*</span></p>
              <Inputs
                {...register("password", { required: true, minLengt: 6 })}
                type="password"
                id="password"
              />
              {errors.password?.type === "required" && (
                <span>Du skal udfylde Password</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>Du skal mindst have et 6 tegn</span>
              )}
            </Labels>
          </div>
          <div className={style.btndiv}>
            <input type="submit" value="Sign Up" />
            {success && (
            <p style={{ color: "green" }}>
              {success}
              <span><BsFillCheckCircleFill/></span>
            </p>
          )} 
           <button className={style.signupbtn} onClick={() => props.setLoginTrue(true)}>Login</button>
          </div>

          
        </form>
      </Content>
    );

}