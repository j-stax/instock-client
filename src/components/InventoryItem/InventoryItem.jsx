import './InventoryItem.scss'
import { Link } from 'react-router-dom'
import ChevronIcon from '../../assets/icons/chevron_right-24px.svg?react'

export default function InventoryItem() {
    return (
        <div className="inventory-item">
            <div className="inventory-item__upper-container">
                <div className="inventory-item__section">
                    <h4 className="inventory-item__label">INVENTORY ITEM</h4>
                    <Link className="inventory-item__link">
                        <h3 className="inventory-item__content inventory-item__content--name">Television</h3>
                        <ChevronIcon className="inventory-item__chevron" />
                    </Link>
                </div>
                <div className="inventory-item__section">
                    <h4 className="inventory-item__label">STATUS</h4>
                    <h4 className="inventory-item__status">IN STOCK</h4>
                </div>
            </div>
            <div className="inventory-item__lower-container">
                <div className="inventory-item__section">
                    <h4 className="inventory-item__label">CATEGORY</h4>
                    <p className="inventory-item__content">Electronics</p>
                </div>
                <div className="inventory-item__section">
                    <h4 className="inventory-item__label">QTY</h4>
                    <p className="inventory-item__content">500</p>
                </div>
            </div>
        </div>
    )
}