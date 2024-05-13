import { createContext, useState } from 'react';
import { useContext } from 'react';

import {Cart2} from './Cart2';


// export const CostContext = createContext(0);

export function BundleCartButtons() {
    const [quantity, setQuantity] = useState(0);
    const totalCost = 5 * quantity;
    
    // return <CostContext.Provider value={totalCost}>
    return <div>
        <p>Custom Cart 2 </p>
        <div style={{ display: 'flex'}}>
            <Cart2 value='1' quantity={quantity} setParentQuantity={setQuantity}>Increment</Cart2>
            <Cart2 value='-1' quantity={quantity} setParentQuantity={setQuantity}>Decrement</Cart2>
            <Cart2 value='0' quantity={0} setParentQuantity={setQuantity}>Reset</Cart2>
        </div>
        <p>Custom Cost {totalCost}</p>
    </div>
    {/* </CostContext.Provider> */}
}