import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export const useLogin = (formValues) => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate();


    const handleSubmit = () => {
        setAuth({
            ...formValues,
            user: formValues.email,
            roles: [2323],
        })

        if (auth.roles.includes[2020]) {
            navigate('/userPanel', { replace: true })
        } else if (auth.roles.includes[2323]) {
            navigate('/adminPanel', { replace: true })
        } else {
            navigate('/login')
        }

    }

    return {
        handleSubmit
    }
}

