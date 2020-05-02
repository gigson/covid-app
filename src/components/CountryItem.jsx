import React from 'react';

function CountryItem({item, handleItemClick}) {
    return (
        <tr>
            <td onClick={handleItemClick} className="clickable">{item.country}</td>
            <td>{item.cases}</td>
            <td>{item.active}</td>
            <td>{item.recovered}</td>
            <td>{item.deaths}</td>
            <td>{item.casesPerOneMillion}</td>
            <td>{item.deathsPerOneMillion}</td>
        </tr>
    );
}

export default CountryItem;