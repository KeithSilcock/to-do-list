import React from 'react';
import listData from '../helpers/list_data';

export default (props) => {

    const list = listData.map(function (item, index) {
        return(
            <li key={index} className='collection-item'>{item.title}</li>
        )
    });

    return(
        <div>
            <ul className="collection">{list}</ul>
            </div>
    );
}