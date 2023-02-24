import axios from 'axios';
import React, { useState, useEffect } from 'react';

//This api returns a list of car manufacturers (mrf)
const MfrData = () => {
    const [mrf, setMrf] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json")
            setMrf(response.data);
            console.log(response.data);
            // console.log(response.data.Count);
            // console.log(response.data.Results[0].Country);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <h2>React Fetch Data with REST API</h2>
            <ul>
                {mrf.Results?.map((item, i) => {
                    return <p key={i}>{item.Mfr_Name}</p>
                    //  <p key={i}>{item.Country}</p>
                    // <p key={i}>{item.Mfr_CommonName}</p> 
                })}
            </ul>
        </div>
    )
}

export default MfrData;