import './Warehouses.scss'
import SearchIcon from '../../assets/icons/search-24px.svg?react'
import SortIcon from '../../assets/icons/sort-24px.svg?react'
import Warehouse from '../../components/Warehouse/Warehouse'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL

export default function Warehouses() {
    const [warehouses, setWarehouses] = useState([])

    useEffect(() => {
        const getWarehouses = async () => {
            try {
                const response = await axios.get(`${API_URL}/warehouses`)
                if (response.status === 200) {
                    setWarehouses(response.data)
                } else {
                    console.log(`GET request for warehouses returned status ${response.status}`)
                }
            } catch (err) {
                console.log(`Unable to retrieve warehouses data: ${err}`)
            }
        }

        getWarehouses()
    }, [])

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
            {warehouses.map(warehouse => 
                <Warehouse
                    key={warehouse.id} 
                    id={warehouse.id}
                    name={warehouse.warehouse_name}
                    address={{ street: warehouse.address, city: warehouse.city, country: warehouse.country }}
                    contactName={warehouse.contact_name}
                    contactInfo={{ phone: warehouse.contact_phone, email: warehouse.contact_email }}
                />
            )}
        </div>
    )
}