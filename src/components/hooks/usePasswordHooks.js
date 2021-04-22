import { useState } from 'react'
import { isStrongPassword } from "validator";

function useInputHooks() {
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function handleInputOnChange(e) {
        let passwordValue = e.target.value;
        setPassword(passwordValue)

        if (!isStrongPassword(passwordValue)) {
            setPasswordError(true)
            setErrorMessage("Your password is not strong")
        } else {
            setPasswordError(false)
            setErrorMessage("")
        }
    }
    return [password, handleInputOnChange, passwordError, errorMessage]
}

export default useInputHooks