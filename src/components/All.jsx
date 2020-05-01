import React, {useEffect, useState} from 'react';
import axios from 'axios';


function All(props) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/all')
            .then((response) => {
                setInfo(response.data);
            })
            .catch((err) => console.error('[All.jsx]', err.message));
    }, []);

    if (!info) return null;

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
                        <td>{info.cases}</td>
                        <td>{info.active}</td>
                        <td>{info.recovered}</td>
                        <td>{info.deaths}</td>
                    </tr>
                </table>
            </div>

        </div>
    );

}


export default All;
