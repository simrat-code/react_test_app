import React, { useContext, useEffect, useState } from 'react';

// import { CostContext } from './CustomCart';

type propsType = {
    children: string,
    value: string,
    quantity: number,
    setParentQuantity: (val:number) => void;
}

export function Cart2(props:propsType) {

    const handleClick = () => {
        const result = props.quantity + parseInt(props.value)
        props.setParentQuantity(result >= 0 ? result: 0);
    }
    // const totalCost = 5 * quantity;
    // const cost = useContext(CostContext);

    return <>
        <button onClick={handleClick} value={props.value}>
            {props.children}
        </button>
    </>
}
