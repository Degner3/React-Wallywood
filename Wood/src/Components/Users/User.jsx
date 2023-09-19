import { useContext } from "react"
import { LoginContext } from "../LoginContext/LoginContext"


export const UserDetails = () => {

    const {user} = useContext(LoginContext)

    return (
        <div>
            <p>{user?.firstname}</p>
            <p>{user?.lastname}</p>
            <p>{user?.acces_token}</p>
        </div>
    )

}