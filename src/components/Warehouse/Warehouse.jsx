import './Warehouse.scss'
import ChevronIcon from '../../assets/icons/chevron_right-24px.svg?react'
import DelIcon from '../../assets/icons/delete_outline-24px.svg?react'
import EditIcon from '../../assets/icons/edit-white-24px.svg?react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DeleteModal from '../Modal/DeleteModal'

export default function Warehouse({ id, name, address, contactName, contactInfo }) {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const handleLinkMouseEnter = (e) => {
        const chevron = e.target.children[0]
        chevron.classList.add("wh-component__chevron--hover")
    }

    const handleLinkMouseOut = (e) => {
        const chevron = e.target.children[0]
        chevron.classList.remove("wh-component__chevron--hover")
    }
 
    return (
        <div className="wh-component">
            <DeleteModal 
                isOpen={isOpen} 
                closeModal={closeModal} 
                id={id} 
                name={name}
                type="warehouses"
            />
            <div className="wh-component__sections-container wh-component__sections-container--mobile">
                <div className="wh-component__left">
                    <div className="wh-component__section">
                        <p className="wh-component__label">WAREHOUSE</p>
                        <h3 className="wh-component__content">
                            <Link to="#" className="wh-component__name">
                                {name}
                                <ChevronIcon className="wh-component__chevron" />
                            </Link>
                        </h3>
                    </div>
                    <div className="wh-component__section">
                        <p className="wh-component__label">ADDRESS</p>
                        <p className="wh-component__content">{address.street}</p>
                        <p className="wh-component__content">{`${address.city}, ${address.country}`}</p>
                    </div>
                </div>
                <div className="wh-component__right">
                    <div className="wh-component__section">
                        <p className="wh-component__label">CONTACT NAME</p>
                        <p className="wh-component__content">{contactName}</p>
                    </div>
                    <div className="wh-component__section">
                        <p className="wh-component__label">CONTACT INFORMATION</p>
                        <p className="wh-component__content">{contactInfo.phone}</p>
                        <p className="wh-component__content">{contactInfo.email}</p>
                    </div>
                </div>
            </div>
            <div className="wh-component__footer wh-component__footer--mobile">
                <DelIcon className="wh-component__icon wh-component__icon--trash" onClick={openModal} />
                <EditIcon className="wh-component__icon wh-component__icon--edit" />
            </div>
            <div className="wh-component__sections-container wh-component__sections-container--tablet">
                <div className="wh-component__section">
                    <p className="wh-component__label">WAREHOUSE</p>
                    <h3 className="wh-component__content">
                        <Link to="#" 
                            className="wh-component__name" 
                            onMouseOver={handleLinkMouseEnter} 
                            onMouseOut={handleLinkMouseOut}
                        >
                            {name}
                            <ChevronIcon className="wh-component__chevron" />
                        </Link>
                    </h3>
                </div>
                <div className="wh-component__section wh-component__section--address">
                    <p className="wh-component__label">ADDRESS</p>
                    <p className="wh-component__content">{address.street}<span className="wh-component__address-comma">,&nbsp; </span></p>
                    <p className="wh-component__content">{`${address.city}, ${address.country}`}</p>
                </div>
                <div className="wh-component__section">
                    <p className="wh-component__label">CONTACT NAME</p>
                    <p className="wh-component__content">{contactName}</p>
                </div>
                <div className="wh-component__section">
                    <p className="wh-component__label">CONTACT INFORMATION</p>
                    <p className="wh-component__content">{contactInfo.phone}</p>
                    <p className="wh-component__content">{contactInfo.email}</p>
                </div>
                <div className="wh-component__footer wh-component__footer--tablet">
                    <DelIcon className="wh-component__icon wh-component__icon--trash" onClick={openModal} />
                    <EditIcon className="wh-component__icon wh-component__icon--edit" />
                </div>
            </div>
        </div>
    )
}