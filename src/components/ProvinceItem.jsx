import React from 'react';

function ProvinceItem({item}) {
    return (
        <tr>
            <td>{item.country}</td>
            <td>{item.province}</td>
            <td>{item.stats.confirmed}</td>
            <td>{item.stats.deaths}</td>
            <td>{item.stats.recovered}</td>
        </tr>
    );
}

export default ProvinceItem;