import React, { useEffect, useState } from 'react';


function Cart() {
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        console.log(`quantity is ${quantity}`);
        if (quantity < 0) {
            setQuantity((prev) => prev * 0);
        }
    }, [quantity]);

    const handleClick = (e: any) => {
        console.log(e.target.value);
        setQuantity((prev)=> prev + parseInt(e.target.value));
    }
    const totalCost = 5 * quantity;
    return <>
        <button onClick={(e) =>handleClick(e)} value='1'>
            Add 1 Item
        </button>
        <button onClick={(e) =>handleClick(e)} value='-1'>
            Delete 1 Item
        </button>
        <button onClick={(e) =>handleClick(e)} value={-quantity}>
            Reset 
        </button>
        <p>Total Cost {totalCost}</p>
    </>
}

export default Cart;