import React from 'react';
import { useState } from 'react';
import './TaxiBillStyle.css'



const TaxiBill = () => {

    const [state, setState] = useState(0);
    const [pnb,setPnb]=useState(1);
    const [boi,setBoi]=useState(1);

    const changeValue=(value)=>{
        if(value===1){
            setState(1);
            setPnb(1);
            setBoi(0);
        }else if(value===2){
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
            {/* <!-------------------- page 1 -------------------------> */}
            <div id="page1">
                <img src="./images/flight.PNG" height="20%" width="15%" align="left" id="img1" alt="img" />
                <img src="./images/train.PNG" height="20%" width="15%" align="right" id="img1" alt="img" />
                <h1 id="h1">R S TOURS & TRAVELS</h1>
                <h2>
                    <font color="green">E-MAIL:-</font> radhey10trivedi@gmail.com / radhey.shyam10@yahoo.in
                </h2>
                <h2>
                    <font color="red">PHONE NO:- - 7080503380 , 9335858090</font>
                </h2>
                <h4>FLIGHT TICKET / TRAIN TICKET / BUS TICKET / HOTEL BOOKING</h4>
            </div>
            {/* <!-------------------- page 2 -------------------------> */}
            <div id="page2">
                <form id="form1">
                    
                    <div className='name'>
                    <label>Passenger Name:- </label>
                    &nbsp;
                    <select id="txt2">
                        <option>Mr</option>
                        <option>Mrs</option>
                        <option>Miss</option>
                        <option>Master</option>
                        <option>Sri</option>
                    </select>
                    <input type="text" id="txt" class="inputdata" />
                    </div>

                    <br />
                    <label>Passenger Phone Number:</label>
                    <input type="number" id="txt" class="inputdata" />
                    <br />
                    <label>Passenger Address: </label>&nbsp;
                    <input type="text" id="txt" class="inputdata1" />
                </form>
            </div>
            {/* <!-- ------------------- page 3 ---------------------- --> */}
            <div id="page2">
                <form id="form1">
                    <label>From </label>
                    <input type="text" id="txt" size="16" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>To</label>
                    <input type="text" id="txt" size="16" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Return</label>
                    <input type="text" id="txt" size="16" />
                </form>
            </div>

            {/* <!-- ------------------- page 4 ---------------------- --> */}
            <div id="page2">
                <form id="form1">
                    <label>Opening Time/Date </label>
                    <input type="text" id="txt" size="15" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Closing Time/Date</label>
                    <input type="text" id="txt" size="15" />&nbsp;
                </form>
                <form id="form1">
                    <label style={{marginRight:"80px"}}>Opening KM &nbsp;</label>
                    <input type="text" id="txt" size="15" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label style={{marginRight:"90px"}}>Closing KM</label>
                    <input type="text" id="txt" size="15" />&nbsp;
                </form>
            </div>

            {/* <!-- ------------------- page 5 ---------------------- --> */}
            <div id="page3">
                <table id="table1">
                    <thead>
                        <td>Name</td>
                        <td>Amount</td>
                        <td>No. of</td>
                        <td>Total Amount</td>
                    </thead>
                    <tr>
                        <td><label>Total Distance Covered</label></td>
                        <td><input type="text" size="15" id="inp" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                    </tr>
                    <tr>
                        <td><label>Total Overnight</label></td>
                        <td><input type="text" size="15" id="inp" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                    </tr>
                    <tr>
                        <td><label>Total Outstation day</label></td>
                        <td><input type="text" size="15" id="inp" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                    </tr>
                    <tr>
                        <td><label>Parking Token,Toll tax</label></td>
                        <td colspan="2"><input type="text" id="inpparking" /></td>
                        <td><input type="text" size="15" id="inp" /></td>
                    </tr>

                    <tr>
                        <td colspan="2"><input type="text" size="50" id="inp" /></td>
                        <td>Total Price</td>
                        <td><input type="text" size="15" id="inp" /></td>
                    </tr>
                </table>
            </div>
            <br />
            {/* <!-- --------------- page 4 ---------------------- --> */}
            <div id="page4">
                <label onClick={()=>{setPnb(1);setBoi(1)}} id="lab1">Payment Details:- </label>
                <button id="btnpnb" onClick={()=>{changeValue(1)}} disabled={pnb===1?false:true}>PNB</button>
                <button id="btnboi" onClick={()=>{changeValue(2)}} disabled={boi===1?false:true}>BOI</button>
            </div>
            <PaymentData></PaymentData>
            {/* <!-- ------------ page 5 --------------------- --> */}
            <div id="page5">
                <img src="./images/sig.png" align="left" id="imgsig" alt='img'/>
            </div>

        </>
    )
}
export default TaxiBill;