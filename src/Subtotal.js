import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router';


function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* {part of the homework} */}
                            Subtotal ({basket.length } items): <strong>{` ${value} `}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} //part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onclick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>

    );
}

export default Subtotal;
