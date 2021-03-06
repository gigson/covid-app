import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProvinceItem from "./ProvinceItem";

function Provinces({limit}) {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/jhucsse')
            .then((response) => {
                setProvinces(response.data.slice(0, limit));
            })
            .catch((err) => console.error('[Countries.jsx]', err.message));
    }, [limit]);

    let content = provinces.map((item) => {
        return (
            <ProvinceItem
                item={item}
            />
        );
    });

    return (
        <div>

            <h1>Provinces Data: </h1>
            <table>
                <tr>
                    <th>Country:</th>
                    <th>Province:</th>
                    <th>Cases:</th>
                    <th>Recovery:</th>
                    <th>Death:</th>
                </tr>
                {content}
            </table>

        </div>
    );
}


export default Provinces;
