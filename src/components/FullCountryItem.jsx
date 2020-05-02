import React, {useEffect, useState} from 'react';
import axios from 'axios';

function FullCountryItem({selectedCountry}) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    'https://corona.lmao.ninja/v2/countries/' + selectedCountry
                );

                setItem(response.data);
            } catch (err) {
                console.error('[FullCountryItem.jsx]', err.message);
            }
        })();
    }, [selectedCountry]);

    if (!item) return null;

    return (
        <div>
            <h2>{item.country}:</h2>
            <table>
                <tr>
                    <th>Cases:</th>
                    <th>Active:</th>
                    <th>Recovery:</th>
                    <th>Death:</th>
                    <th>Tests:</th>
                    <th>Test Per Million:</th>
                </tr>
                <tr>
                    <td>{item.cases}</td>
                    <td>{item.active}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{item.tests}</td>
                    <td>{item.testsPerOneMillion}</td>
                </tr>
            </table>
        </div>
    );
}

export default FullCountryItem;
