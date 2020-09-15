import React from 'react';

const ReviewItems = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItemsStyle ={
        borderBottom :'1px solid lightGrey',
        marginBottom :'5px',
        paddingBottom :'5px',
        marginLeft :'200px'
    }
    return (
        <div className={reviewItemsStyle}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>$ {price}</p>
            <br/>
            <button className="main-button"
            onClick={() => props.removeProduct(key)}>Remove Items</button>
        </div>
    );
};

export default ReviewItems;