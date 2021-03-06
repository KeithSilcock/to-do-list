import React from 'react';

export default (props) => {

    if(!props.listData.length){
        return(
            <h1 className="center grey-text">No To-Do Items</h1>
        )
    }
    //add delete button now

    const list = props.listData.map(function (item, index) {
        return(
            <li key={index} className='collection-item row'>
                <div className="col s10">
                {item.title}
                </div>
                <button
                    className='btn red darken-2 right-align'
                    onClick={(e)=> props.deleteItemCallback(item._id)}
                >Delete</button>
            </li>
        )
    });

    return(
        <ul className="collection">{list}</ul>
    );
}