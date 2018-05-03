import React from 'react';

export default (props) => {

    if(!props.listData.length){
        return(
            <h1 className="center grey-text">No To-Do Items</h1>
        )
    }

    const list = props.listData.map(function (item, index) {
        return(
            <li key={index} className='collection-item'>{item.title}</li>
        )
    });

    return(
        <ul className="collection">{list}</ul>
    );
}