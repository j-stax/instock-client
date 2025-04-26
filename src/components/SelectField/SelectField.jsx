import "./SelectField.scss";
import { useRef } from "react";
import ArrowDropdown from "../../assets/icons/arrow_drop_down-24px.svg?react";
import ErrorIcon from "../../assets/icons/error-24px.svg?react";

export default function SelectField({ label, options, defaultValue }) {
  const selectRef = useRef(null);

  console.log("categoryDATA>>>>>:", options);

  const handleChange = (e) => {
    const errorMsg = selectRef.current.parentNode.nextElementSibling;
    if (e.target.value === "") {
      selectRef.current.classList.add("select-field__input--default");
      selectRef.current.classList.add("select-field__input--error");
      errorMsg.classList.remove("hidden");
    } else {
      selectRef.current.classList.remove("select-field__input--default");
      selectRef.current.classList.remove("select-field__input--error");
      errorMsg.classList.add("hidden");
    }
  };

  return (
    <div className="select-field">
      <label className="select-field__label">
        {label}
        <div className="select-field__input-wrapper">
          <select
            ref={selectRef}
            name="warehouse"
            className="select-field__input select-field__input--default"
            value={defaultValue}
            onChange={handleChange}
          >
            {options.map((category, index) => (
              <option
                className="select-field__option"
                key={index}
                value={category.toLowerCase()}
              >
                {category}
              </option>
            ))}
          </select>
          <ArrowDropdown className="select-field__arrow-down" />
        </div>
        <span className="select-field__error-msg hidden">
          <ErrorIcon className="select-field__error-icon" />
          This field is required
        </span>
      </label>
    </div>
  );
}
