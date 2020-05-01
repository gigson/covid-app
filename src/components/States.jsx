import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryItem from "./CountryItem";
import StateItem from "./StateItem";

function States({limit}) {
    const [states, setStates] = useState([]);

    useEffect(() => {
        axios
            .get('https://corona.lmao.ninja/v2/states')
            .then((response) => {
                setStates(response.data.slice(0, limit));
            })
            .catch((err) => console.error('[Countries.jsx]', err.message));
    }, [limit]);

    let content = <h2>List</h2>;

    content = states.map((item) => {
        return (
            <StateItem
                item={item}
            />
        );
    });

    return (
        <div>

            <h1>By State: </h1>
            <table>
                <tr>
                    <th>State:</th>
                    <th>Cases:</th>
                    <th>Active:</th>
                    <th>Death:</th>
                </tr>
                {content}
            </table>

        </div>
    );
}


export default States;
