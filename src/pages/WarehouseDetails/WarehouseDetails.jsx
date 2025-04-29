import './WarehouseDetails.scss'
import ArrowBackIcon from '../../assets/icons/arrow_back-24px.svg?react'
import EditWhiteIcon from '../../assets/icons/edit-white-24px.svg?react'
import InventoryItem from '../../components/InventoryItem/InventoryItem'
import SortIcon from '../../assets/icons/sort-24px.svg?react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL

export default function WarehouseDetails() {
    const [warehouse, setWarehouse] = useState({})
    const { id } = useParams()

    //TODO: FETCH INVENTORY DATA FOR WAREHOUSE

    useEffect(() => {
        async function fetchWarehouse() {
            try {
                const response = await axios.get(`${API_URL}/warehouses/${id}`)
                if (response.status === 200) {
                    setWarehouse(response.data)
                    console.log(response.data)
                }
            } catch (err) {
                console.log(`Unable to retrieve data for Warehouse ${id}: ${err}`)
            }
        }

        fetchWarehouse()
    }, [])


    return (
        <div className="wh-details">
            <div className="wh-details__header-wrapper">
                <div className="wh-details__header">
                    <div className="wh-details__heading-container">
                        <ArrowBackIcon className="wh-details__arrow-back-icon" />
                        <h1 className="wh-details__heading">{warehouse.warehouse_name}</h1>
                    </div>
                    <div className="wh-details__edit-icon-container">
                        <EditWhiteIcon className="wh-details__edit-icon" />
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
            <InventoryItem
                item="Television"
                status="Out of Stock"
                category="Electronics"
                quantity={500}
            />
        </div>
    )
}