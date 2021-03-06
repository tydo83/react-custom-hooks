import { useState } from 'react'
import { matches } from "validator";

function useInputHooks() {
    const [input, setInput] = useState("")
    const [inputError, setInputError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function handleInputOnChange(e) {
        let inputValue = e.target.value;
        let inputName = e.target.name
        // console.log(`${inputName} : ${inputValue}`);
        setInput(inputValue)

        let checkInputNameAndUseRegexAccordingly;
        let errorMsg;

        if (inputName === "firstName" || inputName === "lastName") {
            checkInputNameAndUseRegexAccordingly = /[!@#$%^&*()\[\],.?":;{}|<>1234567890]/g;
            errorMsg = `${inputName} cannot have any special characters or numbers`
        } else {
            checkInputNameAndUseRegexAccordingly = /[!@#$%^&*()\[\],.?":;{}|<>]/g;
            errorMsg = `${inputName} cannot have any special characters`
        }

        if (matches(inputValue, checkInputNameAndUseRegexAccordingly)) {
            setInputError(true)
            setErrorMessage(errorMsg)
        } else {
            setInputError(false)
            setErrorMessage("")
        }
    }
    return [input, handleInputOnChange, inputError, errorMessage]
}

export default useInputHooks