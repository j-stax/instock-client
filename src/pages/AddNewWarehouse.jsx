import WarehouseForm from "../components/WarehouseForm/WarehouseForm"
import axios from "axios"

const API_URL = import.meta.env.VITE_APP_API_URL

export default function AddNewWarehouse() {

    const addWarehouse = async (warehouseData) => {
        try {
            const response = await axios.post(`${API_URL}/warehouses`, warehouseData)
            if (response.status === 201) {
                alert("Warehouse added successfully!")  
                console.log(response.data)
            } else {
                console.log(`${response}`)
            }
        } catch (err) {
            console.log(`Error with POST request to ${API_URL}: ${err}`)
        }
    }

    return (
        <WarehouseForm 
            pageTitle="Add New Warehouse"
            submitBtnLabel="+ Add Warehouse" 
            handleApi={addWarehouse}
        />
    )
}