import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Worldwide() {
    const [worldwideData, setWorldwideData] = useState(null);

    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/all')
            .then((response) => {
                setWorldwideData(response.data);
            })
            .catch((err) => console.error('[Worldwide.jsx]', err.message));
    }, []);

    if (!worldwideData) return null;

    return (
        <div>

            <div>
                <h1>Worldwide: </h1>
                <table>
                    <tr>
                        <th>Cases:</th>
                        <th>Active:</th>
                        <th>Recovery:</th>
                        <th>Death:</th>
                    </tr>
                    <tr>
                        <td>{worldwideData.cases}</td>
                        <td>{worldwideData.active}</td>
                        <td>{worldwideData.recovered}</td>
                        <td>{worldwideData.deaths}</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default Worldwide;
