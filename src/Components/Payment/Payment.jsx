import React, { useState } from 'react'

const Payment = () => {

    const [state, setState] = useState(0);
    const [pnb, setPnb] = useState(1);
    const [boi, setBoi] = useState(1);

    const changeValue = (value) => {
        if (value === 1) {
            setState(1);
            setPnb(1);
            setBoi(0);
        } else if (value === 2) {
            setState(2);
            setBoi(1);
            setPnb(0);
        }
    }

    const PaymentData = () => {
        if (state === 1) {
            return (
                <>
                    <div id="pnb">
                        <h3>DEEPENDRA TRIVEDI</h3>
                        <h3>SAVING ACCOUNT NO:- <span>4140000100151683</span></h3>
                        <h3>PUNJAB NATIONAL BANK</h3>
                        <h3>BRANCH:- KHAZANA COMPLEX,LUCKNOW</h3>
                        <h3>IFSC:- <span>PUNB0414000</span></h3>
                        <hr />
                        <h3 id="gpay">GooglePay / Paytm:-  <span>7080503380</span></h3>
                    </div>
                </>
            )
        }
        else if (state === 2) {
            return (
                <>
                    <div id='pnb'>
                        <h3>R S TOUR AND TRAVELS</h3>
                        <h3>CURRENT ACCOUNT NO:- <span>683420110000273</span></h3>
                        <h3>BANK OF INDIA</h3>
                        <h3>BRANCH:- LDA COLONY KANPUR ROAD,LUCKNOW</h3>
                        <h3>IFSC:- <span>BKID0006834</span></h3>
                        <hr />
                        <h3 id="gpay">GooglePay / Paytm:-  <span>7080503380</span></h3>
                    </div>
                </>
            )
        }
        else {
            return (<></>)
        }
    }

    return (
        <>
            {/* <!-- --------------- page 4 ---------------------- --> */}

            <div id="page4">
                <label onClick={() => { setPnb(1); setBoi(1) }} id="lab1">Payment Details:- </label>
                <button id="btnpnb" onClick={() => { changeValue(1) }} disabled={pnb === 1 ? false : true}>PNB</button>
                <button id="btnboi" onClick={() => { changeValue(2) }} disabled={boi === 1 ? false : true}>BOI</button>
            </div>
            <PaymentData></PaymentData>
            {/* <!-- ------------ page 5 --------------------- --> */}
            <div id="page5">
                <img src="./images/sig.png" align="left" id="imgsig" alt='img' />
            </div>
        </>
    )
}
export default Payment;