import './DeleteModal.scss'
import Modal from 'react-modal'
import CloseIcon from '../../assets/icons/close-24px.svg?react'
import axios from 'axios'
import { useState } from 'react'

const API_URL = import.meta.env.VITE_APP_API_URL

export default function DeleteModal({ isOpen, closeModal, id, name, type, fetchInventory }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${API_URL}/${type}/${id}`)
            if (response.status === 204) {
                alert(`${name} has been deleted successfully.`)
                closeModal()
                fetchInventory()
            } else {
                console.log(`Response returned status ${response.status}`)
            }
        } catch (err) {
            console.log(`${name} could not be deleted.`)
        }
    }

    // Listen for screen width >= 768px (tablet) to apply tablet and desktop modal styling
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth))

    return (
        <div className="modal-wrapper">
            <div className={screenWidth >= 768 && isOpen ? "modal-backdrop" : "hidden"}></div>
            <Modal className="delete-modal" isOpen={isOpen}>
                <CloseIcon className="delete-modal__close-icon" onClick={closeModal} />
                <h1 className="delete-modal__heading">
                    {`Delete ${name} ${type === "warehouses" ? "warehouse" : "inventory item"}?`}
                </h1>
                <p className="delete-modal__body">
                    {`Please confirm that you'd like to delete ${name} from the list of ${type}. 
                    You won't be able to undo this action.`}
                </p>
                <div className="delete-modal__footer">
                    <button className="delete-modal__button delete-modal__button--cxl" onClick={closeModal}>Cancel</button>
                    <button className="delete-modal__button delete-modal__button--delete" onClick={handleDelete}>Delete</button>
                </div>
            </Modal>
        </div>
    )
}