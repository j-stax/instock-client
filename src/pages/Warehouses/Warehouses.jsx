import './Warehouses.scss'
import SearchIcon from '../../assets/icons/search-24px.svg?react'

export default function Warehouses() {
    return (
        <div className="warehouses">
            <div className="warehouses__header">
                <h1 className="warehouses__heading">Warehouses</h1>
                <div className="warehouses__search-container">
                    <input className="warehouses__search" type="text" placeholder="Search..." />
                    <SearchIcon className="warehouses__search-icon" />
                </div>
                <button className="warehouses__add-btn" type="button">+ Add New Warehouse</button>
            </div>
            <div>
                <h2>Warehouse Component</h2>
            </div>
        </div>
    )
}