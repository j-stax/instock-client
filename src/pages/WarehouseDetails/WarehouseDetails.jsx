import './WarehouseDetails.scss'
import ArrowBackIcon from '../../assets/icons/arrow_back-24px.svg?react'
import EditWhiteIcon from '../../assets/icons/edit-white-24px.svg?react'
import InventoryItem from '../../components/InventoryItem/InventoryItem'
import SortIcon from '../../assets/icons/sort-24px.svg?react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function WarehouseDetails() {
    const [warehouse, setWarehouse] = useState({})
    const { id} = useParams()


    return (
        <div className="wh-details">
            <div className="wh-details__header-wrapper">
                <div className="wh-details__header">
                    <div className="wh-details__heading-container">
                        <ArrowBackIcon className="wh-details__arrow-back-icon" />
                        <h1 className="wh-details__heading">Washington</h1>
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
                        33 Pearl Street SW, <span>Washington, USA</span>
                    </p>
                </div>
                <div className="wh-details__contact-container">
                    <div className="wh-details__contact">
                        <h4 className="wh-details__label">CONTACT NAME:</h4>
                        <p className="wh-details__content">Graeme Lyon</p>
                        <p className="wh-details__content">Warehouse Manager</p>
                    </div>
                    <div className="wh-details__contact wh-details__contact--info">
                        <h4 className="wh-details__label">CONTACT INFORMATION:</h4>
                        <p className="wh-details__content">+1 (647) 504-0911</p>
                        <p className="wh-details__content">glyon@instock.com</p>
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
                status="In stock"
                category="Electronics"
                quantity={500}
            />
        </div>
    )
}