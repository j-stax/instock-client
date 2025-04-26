import "./TextField.scss"
import ErrorIcon from "../../assets/icons/error-24px.svg?react"


export default function TextField({inputs, setInputs, labelName, inputName, fieldRef}) {

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
        const errorMsgElem = e.target.parentNode.nextElementSibling
        if (value.length === 0) {
            errorMsgElem.classList.remove("hidden")
            e.target.classList.add("textField__input--error")
        } else {
            errorMsgElem.classList.add("hidden")
            e.target.classList.remove("textField__input--error")
        }
    }

    return (
        <div className="textField">
            <label className="textField__label">
                {labelName}
                <input 
                    ref={fieldRef}
                    type="text"  
                    className="textField__input"
                    placeholder={labelName}
                    name={inputName}
                    value={inputs[inputName]}
                    onChange={handleChange}
                />
            </label>
            <span className="textField__error-msg hidden">
                <ErrorIcon className="textField__error-icon" />
                This field is required
            </span>
        </div>
    )
}