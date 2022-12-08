import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="page1">
                <img className='flight-img' src="./images/flight.PNG" alt="img" />
                <img className='train-img' src="./images/train.PNG" alt="img" />
                <div className="page1-text">
                    <h1>R S TOURS & TRAVELS</h1>
                    <h2><span>E-MAIL :</span>radhey10trivedi@gmail.com / radhey.shyam10@yahoo.in</h2>
                    <h3><span>PHONE NO :</span>7080503380 , 9335858090</h3>
                    <h4>FLIGHT TICKET / TRAIN TICKET / BUS TICKET / HOTEL BOOKING</h4>
                </div>
                
            </div>

        </>
    )
}

export default Header;