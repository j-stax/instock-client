import './InventoryItem.scss'
import { Link } from 'react-router-dom'
import ChevronIcon from '../../assets/icons/chevron_right-24px.svg?react'
import DeleteIcon from '../../assets/icons/delete_outline-24px.svg?react'
import EditIcon from '../../assets/icons/edit-24px.svg?react'


export default function InventoryItem({ item, status, category, quantity }) {

    //TODO: ADD NEW SET OF INVENTORY CONTENT FOR MOBILE (NO LABELS)

    return (
        <div className="inventory-item">
            <div className="inventory-item__mobile">
                <div className="inventory-item__upper-container">
                    <div className="inventory-item__section">
                        <h4 className="inventory-item__label">INVENTORY ITEM</h4>
                        <Link className="inventory-item__link">
                            <h3 className="inventory-item__content inventory-item__content--name">{item}</h3>
                            <ChevronIcon className="inventory-item__chevron" />
                        </Link>
                    </div>
                    <div className="inventory-item__section">
                        <h4 className="inventory-item__label">STATUS</h4>
                        <h4 className="inventory-item__status">{status.toUpperCase()}</h4>
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
                    <DeleteIcon />
                    <EditIcon />
                </div>
            </div>
            <div className="inventory-item__tablet">
                <Link className="inventory-item__link">
                    <h3 className="inventory-item__content inventory-item__content--name">{item}</h3>
                    <ChevronIcon className="inventory-item__chevron" />
                </Link>
                <div className="inventory-item__section">
                    <p2 className="inventory-item__content">{category}</p2>
                </div>
                <div className="inventory-item__section">
                    <h4 className="inventory-item__status">{status}</h4>
                </div>
                <div className="inventory-item__section">
                    <p2 className="inventory-item__content">{quantity}</p2>
                </div>
                <div className="inventory-item__buttons">
                    <DeleteIcon />
                    <EditIcon />
                </div>
            </div>
        </div>
    )
}