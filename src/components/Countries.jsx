import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryItem from "./CountryItem";
import FullCountryItem from "./FullCountryItem";

function Countries({limit}) {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/countries?sort=country')
            .then((response) => {
                setCountries(response.data.slice(0, limit));
            })
            .catch((err) => console.error('[Countries.jsx]', err.message));
    }, [limit]);

    const handleItemClick = (itemId) => {
        setSelectedCountry(itemId);
    };

    if (selectedCountry) {
        return (
            <div>
                <FullCountryItem selectedCountry={selectedCountry}/>
            </div>
        );
    }

    let content = countries.map((item) => {
        return (
            <CountryItem
                item={item}
                handleItemClick={() => {
                    handleItemClick(item.country);
                }}
            />
        );
    });

    return (
        <div>

            <h1>By Country: </h1>
            <table>
                <tr>
                    <th>Country:</th>
                    <th>Cases:</th>
                    <th>Active:</th>
                    <th>Recovery:</th>
                    <th>Death:</th>
                    <th>Cases Per Million:</th>
                    <th>Deaths Per Million:</th>
                </tr>
                {content}
            </table>

        </div>
    );

}


export default Countries;
