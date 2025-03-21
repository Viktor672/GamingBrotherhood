import { useNavigate } from "react-router";
import { useLogout } from "../apiHooks/authApi";

export default function LogoutPage() {
    let navigate = useNavigate();
    let { isLogged } = useLogout();
    console.log(isLogged);

    isLogged
        ?
        null
        :
        navigate('/')
}