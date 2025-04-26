import WarehouseForm from "../components/WarehouseForm/WarehouseForm"
import axios from "axios"
import { useParams } from "react-router-dom"

const API_URL = import.meta.env.VITE_APP_API_URL

export default function EditWarehouse() {
    const { id } = useParams()

    const fetchWarehouse = async () => {
        try {
            const response = await axios.get(`${API_URL}/warehouses/${id}`)
            if (response.status === 200) {
                return response.data
            } else {
                console.log(`API request returned status: ${response.status}`)
            }
        } catch (err) {
            alert(`Error fetching data for Warehouse ID ${id}`)
            console.log(`Error fetching data for Warehouse ID ${id}: ${err}`)
        }
    }

    const updateWarehouse = async (updatedWarehouse) => {
        try {
            const response = await axios.patch(`${API_URL}/warehouses/${id}`, updatedWarehouse)
            if (response.status === 200) {
                console.log(response.data)
                alert(`Warehouse ${id} updated successfully!`)
            }
        } catch (err) {
            console.log(`Error updating Warehouse ID ${id}: ${err}`)
        }
    }

    return (
        <WarehouseForm 
            pageTitle="Edit Warehouse"
            submitBtnLabel="Save" 
            handleApi={updateWarehouse}
            fetchWarehouse={fetchWarehouse}
            clearInputs={false}
        />
    )
}