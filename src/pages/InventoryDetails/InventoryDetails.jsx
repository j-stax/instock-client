import './InventoryDetails.scss'
import ArrowBackIcon from '../../assets/icons/arrow_back-24px.svg?react'
import EditIcon from '../../assets/icons/edit-white-24px.svg?react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL

export default function InventoryDetails() {
    const [inventoryStock, setInventoryStock] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchInventoryStockData = async () => {
            try {
                const response = await axios.get(`${API_URL}/inventories/${id}`)
                if (response.status === 200) {
                    setInventoryStock(response.data)
                } else {
                    console.log(`GET request for inventory stock details returned status code ${response.status}`)
                }
            } catch (err) {
                console.log(`Error fetching inventory details data: ${err}`)
            }
        }

        fetchInventoryStockData()
    }, [])


    const goBack = (e) => {
        e.preventDefault()
        navigate(-1)
    }


    return (
        <>
            <div className="inv-details">
                <div className="inv-details__header-wrapper">
                    <div className="inv-details__header">
                        <Link className="inv-details__return-link" onClick={goBack}>
                            <ArrowBackIcon />
                            <h1 className="inv-details__heading">{inventoryStock.item_name}</h1>
                        </Link>
                        <Link className="inv-details__edit-icon-link">
                            <div className="inv-details__edit-icon-background">
                                <EditIcon className="inv-details__edit-icon" />
                                <span className="inv-details__edit-text">Edit</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="inv-details__item">
                    <div className="inv-details__tablet-section-left">
                        <div className="inv-details__content-section">
                            <h4 className="inv-details__item-label">ITEM DESCRIPTION</h4>
                            <p className="inv-details__item-text inv-details__item-text--description">
                                {inventoryStock.description}
                            </p>
                        </div>
                        <div className="inv-details__content-section">
                            <h4 className="inv-details__item-label">CATEGORY</h4>
                            <p className="inv-details__item-text">{inventoryStock.category}</p>
                        </div>
                    </div>
                    <div className="inv-details__tablet-section-right">
                        <div className="inv-details__status-quantity-row">
                            <div>
                                <h4 className="inv-details__item-label">STATUS</h4>
                                <p 
                                    className={`inv-details__item-text inv-details__item-text--status ${inventoryStock.status === "In Stock" ? "inv-details__instock--green" : "inv-details__instock--red"}`}
                                >{inventoryStock.status}</p>
                            </div>
                            <div>
                                <h4 className="inv-details__item-label">QUANTITY</h4>
                                <p className="inv-details__item-text">{inventoryStock.quantity}</p>
                            </div>
                        </div>
                        <div className="inv-details__content-section">
                            <h4 className="inv-details__item-label">WAREHOUSE</h4>
                            <p className="inv-details__item-text">{inventoryStock.warehouse_name}</p>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="bottom-margin-section"></div>
        </>
    )
}