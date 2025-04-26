import "./WarehouseForm.scss"
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "../../assets/icons/arrow_back-24px.svg?react"
import { useEffect, useState, useRef } from "react"
import TextField from "../TextField/TextField";


export default function WarehouseForm({ pageTitle, submitBtnLabel, handleApi, fetchWarehouse=null, clearInputs=true }) {
    const warehouseNameRef = useRef(null)
    const addressRef = useRef(null)
    const cityRef = useRef(null)
    const countryRef = useRef(null)
    const contactNameRef = useRef(null)
    const contactPosRef = useRef(null)
    const contactPhoneRef = useRef(null)
    const contactEmailRef = useRef(null)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        contact_position: "",
        contact_phone: "",
        contact_email: ""
    })
    const inputsRefMap = {
        warehouse_name: warehouseNameRef,
        address: addressRef,
        city: cityRef,
        country: countryRef,
        contact_name: contactNameRef,
        contact_position: contactPosRef,
        contact_phone: contactPhoneRef,
        contact_email: contactEmailRef
    }

    useEffect(() => {
        async function setFormFields() {
            const data = await fetchWarehouse()
            if (data) {
                setInputs(data)
            } 
        }

        if (fetchWarehouse) { 
            setFormFields()
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let flag = false
        for (const name in inputs) {
            if (!inputs[name]) {
                const inputElem = inputsRefMap[name].current
                const inputElemErrorMsg = inputElem.parentNode.nextElementSibling
                inputElem.classList.add("textField__input--error")
                inputElemErrorMsg.classList.remove("hidden")
                flag = true
            }
        }
        if (flag) {
            return
        }
        handleApi(inputs)
        if (clearInputs) {
            setInputs(prev => {
                return Object.fromEntries(
                    Object.entries(prev).map(([key, value]) => [key, ""])
                )
            })
        }
    }
    
    const goBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    return (
        <div className="warehouse-form">
            <div className="warehouse-form__header-container">
                <Link to="#" className="warehouse-form__back-arrow" onClick={goBack}>
                    <ArrowBackIcon />
                </Link>
                <h1 className="warehouse-form__header">{pageTitle}</h1>
            </div>
            <form className="warehouse-form__form" onSubmit={handleSubmit}>
                <div className="warehouse-form__form-body">
                    <div className="warehouse-form__wh-details-container">
                        <h2 className="warehouse-form__wh-details-header">Warehouse Details</h2>
                        <div className="warehouse-form__wh-details">
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Warehouse Name" 
                                inputName="warehouse_name" 
                                fieldRef={warehouseNameRef}
                            />
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Street Address"
                                inputName="address"
                                fieldRef={addressRef}
                            />
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="City"
                                inputName="city"
                                fieldRef={cityRef}
                            />
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Country"
                                inputName="country"
                                fieldRef={countryRef}
                            />
                        </div>
                    </div>
                    <hr className="warehouse-form__divider"/>
                    <div className="warehouse-form__contact-details-container">
                        <h2 className="warehouse-form__contact-details-header">Contact Details</h2>
                        <div className="warehouse-form__contact-details">
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Contact Name"
                                inputName="contact_name"
                                fieldRef={contactNameRef}
                            />
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Position"
                                inputName="contact_position"
                                fieldRef={contactPosRef}
                            />
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Phone Number"
                                inputName="contact_phone"
                                fieldRef={contactPhoneRef}
                            />
                            <TextField 
                                inputs={inputs}
                                setInputs={setInputs}
                                labelName="Email"
                                inputName="contact_email"
                                fieldRef={contactEmailRef}
                            />
                        </div>
                    </div>
                </div>
                <div className="warehouse-form__buttons">
                    <button className="warehouse-form__btn warehouse-form__btn--cxl" onClick={goBack}>Cancel</button>
                    <button type="submit" className="warehouse-form__btn warehouse-form__btn--submit">{submitBtnLabel}</button>
                </div>
            </form> 
        </div>
    )
}