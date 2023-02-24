import axios from 'axios';

export async function fetchData() {
    try {
        const response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
        return response.data;
        // console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};