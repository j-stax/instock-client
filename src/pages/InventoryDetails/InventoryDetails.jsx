import './InventoryDetails.scss'
import ArrowBackIcon from '../../assets/icons/arrow_back-24px.svg?react'
import EditIcon from '../../assets/icons/edit-white-24px.svg?react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function InventoryDetails() {
    const [inventoryStock, setInventoryStock] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    // TODO: USEEFFECT TO FETCH INVENTORY STOCK DETAILS + TABLET AND DESKTOP VIEWS


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
                            <h1 className="inv-details__heading">Television</h1>
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
                                This 50", 4K LED TV provides a crystal-clear picture and vivid colors.
                            </p>
                        </div>
                        <div className="inv-details__content-section">
                            <h4 className="inv-details__item-label">CATEGORY</h4>
                            <p className="inv-details__item-text">Electronics</p>
                        </div>
                    </div>
                    <div className="inv-details__tablet-section-right">
                        <div className="inv-details__status-quantity-row">
                            <div>
                                <h4 className="inv-details__item-label">STATUS</h4>
                                <p 
                                    className="inv-details__item-text inv-details__item-text--status"
                                >IN STOCK</p>
                            </div>
                            <div>
                                <h4 className="inv-details__item-label">QUANTITY</h4>
                                <p className="inv-details__item-text">500</p>
                            </div>
                        </div>
                        <div className="inv-details__content-section">
                            <h4 className="inv-details__item-label">WAREHOUSE</h4>
                            <p className="inv-details__item-text">Manhattan</p>
                        </div>
                    </div>
                </div>     
            </div>
            <div className="bottom-margin-section"></div>
        </>
    )
}