import './Warehouses.scss'
import SearchIcon from '../../assets/icons/search-24px.svg?react'
import SortIcon from '../../assets/icons/sort-24px.svg?react'
import Warehouse from '../../components/Warehouse/Warehouse'

export default function Warehouses() {
    return (
        <div className="warehouses">
            <div className="warehouses__header">
                <h1 className="warehouses__heading">Warehouses</h1>
                <div className="warehouses__header-widgets">
                    <div className="warehouses__search-container">
                        <input className="warehouses__search" type="text" placeholder="Search..." />
                        <SearchIcon className="warehouses__search-icon" />
                    </div>
                    <button className="warehouses__add-btn" type="button">+ Add New Warehouse</button>
                </div>
            </div>
            <div className="warehouses__sort">
                <span className="warehouses__sort-option">
                    WAREHOUSE 
                    <SortIcon className="warehouses__sort-icon" />
                </span>
                <span className="warehouses__sort-option">
                    ADDRESS
                    <SortIcon className="warehouses__sort-icon" />
                </span>
                <span className="warehouses__sort-option">
                    CONTACT NAME
                    <SortIcon className="warehouses__sort-icon" />
                </span>
                <span className="warehouses__sort-option">
                    CONTACT INFORMATION
                    <SortIcon className="warehouses__sort-icon" />
                </span>
                <span className="warehouses__sort-option">
                    ACTIONS
                </span>  
            </div>
            <Warehouse
                id={1} 
                name="Manhattan"
                address={{ street: "503 Broadway", city: "New York", country: "USA" }}
                contactName="Parmin Aujla"
                contactInfo={{ phone: "+1 (629) 555-0129", email: "paujla@instock.com" }}
            />
        </div>
    )
}