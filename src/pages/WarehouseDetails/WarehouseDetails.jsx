import './WarehouseDetails.scss'
import ArrowBackIcon from '../../assets/icons/arrow_back-24px.svg?react'
import EditWhiteIcon from '../../assets/icons/edit-white-24px.svg?react'
import InventoryItem from '../../components/InventoryItem/InventoryItem'
import SortIcon from '../../assets/icons/sort-24px.svg?react'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL

export default function WarehouseDetails() {
    const [warehouse, setWarehouse] = useState({})
    const [inventory, setInventory] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchWarehouse()
        fetchInventory()
    }, [])

    const fetchWarehouse = async () => {
        try {
            const response = await axios.get(`${API_URL}/warehouses/${id}`)
            if (response.status === 200) {
                setWarehouse(response.data)
            } else {
                console.log(`Response returned status code ${response.status}`)
            }
        } catch (err) {
            console.log(`Unable to retrieve data for Warehouse ID ${id}: ${err}`)
        }
    }

    const fetchInventory = async () => {
        try {
            const response = await axios.get(`${API_URL}/warehouses/${id}/inventories`)
            if (response.status === 200) {
                setInventory(response.data)
            } else {
                console.log(`Response returned status code ${response.status}`)
            }
        } catch (err) {
            console.log(`Unable to retrieve inventory data for Warehouse ID ${id}: ${err}`)
        }
    }

    const goBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }


    return (
        <div className="wh-details">
            <div className="wh-details__header-wrapper">
                <div className="wh-details__header">
                    <div className="wh-details__heading-container">
                        <Link to="#" className="wh-details__back-link" onClick={goBack}>
                            <ArrowBackIcon className="wh-details__arrow-back-icon" />
                        </Link>
                        <h1 className="wh-details__heading">{warehouse.warehouse_name}</h1>
                    </div>
                    <div className="wh-details__edit-icon-container">
                        <Link to="#" className="wh-details__edit-icon-link">
                            <EditWhiteIcon className="wh-details__edit-icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="wh-details__warehouse">
                <div className="wh-details__address">
                    <h4 className="wh-details__label">WAREHOUSE ADDRESS:</h4>
                    <p className="wh-details__content wh-details__content--address">
                        {warehouse.address},
                        <span>{`${warehouse.city}, ${warehouse.country}`}</span>
                    </p>
                </div>
                <div className="wh-details__contact-container">
                    <div className="wh-details__contact">
                        <h4 className="wh-details__label">CONTACT NAME:</h4>
                        <p className="wh-details__content">{warehouse.contact_name}</p>
                        <p className="wh-details__content">{warehouse.contact_position}</p>
                    </div>
                    <div className="wh-details__contact wh-details__contact--info">
                        <h4 className="wh-details__label">CONTACT INFORMATION:</h4>
                        <p className="wh-details__content">{warehouse.contact_phone}</p>
                        <p className="wh-details__content">{warehouse.contact_email}</p>
                    </div>
                </div>
            </div>
            <div className="wh-details__sort-bar">
                <h4 className="wh-details__sort-bar-type">
                    INVENTORY ITEM
                    <SortIcon className="wh-details__sort-icon"/>
                </h4>
                <h4 className="wh-details__sort-bar-type">
                    CATEGORY
                    <SortIcon className="wh-details__sort-icon"/>
                </h4>
                <h4 className="wh-details__sort-bar-type">
                    STATUS
                    <SortIcon className="wh-details__sort-icon"/>
                </h4>
                <h4 className="wh-details__sort-bar-type">
                    QUANTITY
                    <SortIcon className="wh-details__sort-icon"/>
                </h4>
                <h4 className="wh-details__sort-bar-actions">ACTIONS</h4>
            </div>
            {inventory.map(inv => 
                <InventoryItem
                    key={inv.id}
                    id={inv.id}
                    item={inv.item_name}
                    status={inv.status}
                    category={inv.category}
                    quantity={inv.quantity}
                    fetchInventory={fetchInventory}
                />
            )}
        </div>
    )
}