import './InventoryItem.scss'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import ChevronIcon from '../../assets/icons/chevron_right-24px.svg?react'
import DeleteIcon from '../../assets/icons/delete_outline-24px.svg?react'
import EditIcon from '../../assets/icons/edit-24px.svg?react'
import DeleteModal from '../Modal/DeleteModal'


export default function InventoryItem({ id, item, status, category, quantity, fetchInventory }) {
    const [isOpen, setIsOpen] = useState(false)
    const chevronRef = useRef(null)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    const handleMouseOver = () => {
        chevronRef.current.classList.add("inventory-item__chevron--hover")
    }

    const handleMouseOut = (e) => {
        chevronRef.current.classList.remove("inventory-item__chevron--hover")
    }

    const statusStyles = status.toLowerCase() === "in stock" ? 
        "inventory-item__status" : "inventory-item__status inventory-item__status--red" 

    return (
        <div className="inventory-item">
            <DeleteModal 
                isOpen={isOpen}
                closeModal={closeModal}
                id={id}
                name={item}
                type="inventories"
                fetchInventory={fetchInventory}
            />
            <div className="inventory-item__mobile">
                <div className="inventory-item__upper-container">
                    <div className="inventory-item__section">
                        <h4 className="inventory-item__label">INVENTORY ITEM</h4>
                        <Link 
                            to={`/inventory/${id}`}
                            className="inventory-item__link" 
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                        >
                            <h3 className="inventory-item__content inventory-item__content--name">{item}</h3>
                            <ChevronIcon className="inventory-item__chevron" ref={chevronRef} />
                        </Link>
                    </div>
                    <div className="inventory-item__section">
                        <h4 className="inventory-item__label">STATUS</h4>
                        <h4 className={statusStyles}>{status.toUpperCase()}</h4>
                    </div>
                </div>
                <div className="inventory-item__lower-container">
                    <div className="inventory-item__section">
                        <h4 className="inventory-item__label">CATEGORY</h4>
                        <p className="inventory-item__content">{category}</p>
                    </div>
                    <div className="inventory-item__section">
                        <h4 className="inventory-item__label">QTY</h4>
                        <p className="inventory-item__content">{quantity}</p>
                    </div>
                </div>
                <div className="inventory-item__buttons">
                    <DeleteIcon className="inventory-item__button" onClick={openModal} />
                    <EditIcon className="inventory-item__button" />
                </div>
            </div>
            <div className="inventory-item__tablet">
                <Link 
                    to={`/inventories/${id}`}   
                    className="inventory-item__link" 
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <h3 className="inventory-item__content inventory-item__content--name">{item}</h3>
                    <ChevronIcon className="inventory-item__chevron" ref={chevronRef} />
                </Link>
                <div className="inventory-item__section">
                    <p className="inventory-item__content">{category}</p>
                </div>
                <div className="inventory-item__section">
                    <h4 className={statusStyles}>{status.toUpperCase()}</h4>
                </div>
                <div className="inventory-item__section">
                    <p className="inventory-item__content">{quantity}</p>
                </div>
                <div className="inventory-item__buttons">
                    <DeleteIcon className="inventory-item__button" onClick={openModal} />
                    <EditIcon className="inventory-item__button" />
                </div>
            </div>
        </div>
    )
}