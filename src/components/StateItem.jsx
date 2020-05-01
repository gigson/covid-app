import React from 'react';

function StateItem({ item }) {
    return (
        <tr>
            <td>{item.state}</td>
            <td>{item.cases}</td>
            <td>{item.active}</td>
            <td>{item.deaths}</td>
        </tr>
    );
}

export default StateItem;