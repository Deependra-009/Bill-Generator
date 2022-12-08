import React from 'react';
import Header from '../Header/Header';
import Payment from '../Payment/Payment';

const Rail=()=>{
    return (
        <>
        <Header />
        <div id="page2">
            <form id="form1">
                <label>Passenger Name:- </label>
                <select id="txt2">
                    <option>Mr</option>
                    <option>Mrs</option>
                    <option>Miss</option>
                    <option>Master</option>
                </select>
                <input type="text" className='input-text' size="15" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>Date:- </label>
                <input type="date" id="txt" />
            </form>
        </div>
        <div id="page3">
            <table id="table1">
                <thead>
                    <td>Name</td>
                    <td>From</td>
                    <td>To</td>
                    <td>Date</td>
                    <td>Fare</td>
                </thead>
                <tr>
                    <td><input type="text" size="20" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="date" size="10" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                </tr>
                <tr>
                    <td><input type="text" size="20" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="date" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                </tr>
                <tr>
                    <td><input type="text" size="20" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="date" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                </tr>
                <tr>
                    <td><input type="text" size="20" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="date" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                </tr>
                <tr>
                    <td><input type="text" size="20" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                    <td><input type="date" id="inp" /></td>
                    <td><input type="text" size="10" id="inp" /></td>
                </tr>

                <tr>
                    <td colspan="3"></td>
                    <td>Total Price</td>
                    <td><input type="text" size="10" id="inp" /></td>
                </tr>
            </table>
        </div>
        <br></br>
        <Payment/>
    </>
    )
}

export default Rail;