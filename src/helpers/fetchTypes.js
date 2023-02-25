import axios from 'axios';
import React, { useState, useEffect } from 'react';

//This api returns a list of car manufacturers (mrf)
const FetchMrfData = () => {

    const [vehicleName, setVehicleName] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")

            const result = response.data.Results
            // const allVehiclesTypes = result.map(item => {
            //     return item.VehicleTypes
            // })
            // console.log(allVehiclesTypes);

            const displayTypesNames = result.map((item) =>
                item.VehicleTypes.map((Name) => Name.Name));
            setVehicleName(displayTypesNames)


        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h2>Fetch Types of Cars Manufactured</h2>
            <ul>
                {vehicleName.map((item, i) => {
                    return (
                        <div>
                            <p key={i}>{item[0]}</p>
                            <p key={i}>{item[1]}</p>
                            <p key={i}>{item[2]}</p>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default FetchMrfData;