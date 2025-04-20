import './DeleteModal.scss'
import Modal from 'react-modal'
import CloseIcon from '../../assets/icons/close-24px.svg?react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_API_URL

export default function DeleteModal({ isOpen, closeModal, id, name, type }) {

    const handleDelete = async () => {
        try {
            //const response = await axios.delete(`${API_URL}/warehouses/${id}`)
            alert(`${name} has been deleted successfully.`)
            closeModal()
        } catch (err) {
            console.log(`${name} could not be deleted.`)
        }
    }

    return (
        <Modal className="delete-modal" isOpen={isOpen}>
            <CloseIcon className="delete-modal__close-icon" />
            <h1 className="delete-modal__heading">{`Delete ${name} Warehouse?`}</h1>
            <p className="delete-modal__body">
                {`Please confirm that you'd like to delete ${name} from the list of ${type}.
                You won't be able to undo this action.`} 
            </p>
            <div className="delete-modal__footer">
                <button className="delete-modal__button delete-modal__button--cxl" onClick={closeModal}>Cancel</button>
                <button className="delete-modal__button delete-modal__button--delete" onClick={handleDelete}>Delete</button>
            </div>
        </Modal>
    )
}