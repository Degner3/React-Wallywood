import { Content } from "../../Components/Content/Content"
import { Buttons } from "../../Components/Buttons/Buttons"
import style from "./ContactPage.module.scss"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs"
import { Inputs } from "../../Components/Formular/Inputs";
import { Labels } from "../../Components/Formular/Label";



export const ContactPage = () => {

  // Henter funktionalitet fra useForm
  const { register, handleSubmit,  formState: { errors }, } = useForm()

  const [success, setSuccess] = useState("")
  // const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

 // Funktion til at håndtere indsendelse af formularen
  const onSubmit = (data, event) => {
    console.log("Form data:", data);
    setSuccess("Tak for din feedback!")

    // Nulstil formularfelterne
    event.target.reset();
  }


  return (
    <Content title="Kontakt os">
      <form className={style.contact} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.contactwrapper}>
          <Labels htmlFor="name">
            <p>Dit navn: <span>*</span></p> 
            <Inputs {...register("name", { required: "true", pattern: /^[A-Za-z]+$/i })}
              type="text"
              name="name"
              id="name"/>
          </Labels>
          {errors.name && <span>Du skal udfylde feltet</span>}
          <Labels htmlFor="email">
            <p>Din email: <span>*</span></p>
            <Inputs
              {...register('email', { required: "true", pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
              type="email"
              name="email"
              id="email"
            />
          </Labels>
          {errors.email && <span>Du skal udfylde Email</span>}
          <Labels htmlFor="message">
            <p>Din besked: <span>*</span></p>
            <textarea
              {...register('message', { required: "true", minLength: 20, maxLength: 200 })}
              type="message"
              name="message"
              id="message"
              rows="10"
            />
          </Labels>
          {errors.message && <span>Du skal mindst skrive 20 tegn</span>}
        </div>
        <div className={style.btndiv}>
         <Buttons>Send</Buttons>
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
};